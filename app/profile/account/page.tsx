"use client";

import Loading from "@/app/loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useUser } from "@stackframe/stack";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const UserAccount = () => {
  const user = useUser();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log(user);
    if (user && user.primaryEmail && user.displayName) {
      setEmail(user.primaryEmail);
      setName(user.displayName);
    }
  }, [user]);

  const handleUserUpdate = async (
    formEvent: React.FormEvent<HTMLFormElement>,
  ) => {
    formEvent.preventDefault();
    try {
      setLoading(true);
      if (!user) {
        console.log("User is not logged in");
        return;
      }
      if (password !== confirmPassword) {
        console.log("Passwords do not match");
        return;
      }

      if (name !== user.displayName) {
        await user?.setDisplayName(name);
        toast("Display name updated successfully");
      }
      if (password && password === confirmPassword) {
        await user?.setPassword({ password });
        toast("Password updated successfully");
      }
      setLoading(false);
    } catch (error) {
      // setError(error);
      console.log(error);
      toast("Unable to update profile");
      setLoading(false);
    }
  };

  return user ? (
    <main className="p-4">
      <Card className="mt-24">
        <CardHeader>
          <CardTitle className="font-normal text-2xl">Update Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUserUpdate} className="flex flex-col gap-4">
            <div className="space-y-1">
              <Label>Name</Label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <Tooltip defaultOpen>
              <TooltipTrigger asChild>
                <div className="space-y-1">
                  <Label>Email</Label>
                  <Input
                    type="email"
                    value={email}
                    disabled
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent className="relative top-8">
                <p>Email can not be changed</p>
              </TooltipContent>
            </Tooltip>

            <div className="space-y-1">
              <Label>Password</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <Label>Confirm Password</Label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Updating..." : "Update"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  ) : (
    <Loading />
  );
};

export default UserAccount;
