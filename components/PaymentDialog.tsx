import { useIsMobile } from "@/hooks/use-mobile";

import { Card } from "./ui/card";
import { Drawer, DrawerContent } from "./ui/drawer";

type PaymentDialogProps = {
  url: string;
};

const PaymentDialog = ({ url }: PaymentDialogProps) => {
  const isMobile = useIsMobile();
  // useEffect(() => {
  //   if (url) {
  //     setShowDialog(true);
  //   }
  // }, [url]);
  // const newUserMessage = {
  //   title: "Welcome aboard! 👋",
  //   description:
  //     "We're thrilled to have you join our community. Get started with your account and explore all the amazing features we have to offer.",
  // };

  if (!url) return null;

  if (isMobile) {
    return (
      // <Drawer className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Drawer open={true}>
        <DrawerContent className="p-0 z-50">
          <iframe
            className="flex-col items-center justify-center p-0 z-50 rounded-xl max-w-3xl h-dvh"
            src={url}
          />
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Card className="fixed inset-0 bg-black/50 flex items-center justify-center p-2 z-50">
      <iframe className="w-[50vw] h-[60vh] p-0 z-50 rounded-4xl" src={url} />
    </Card>
  );
};

export default PaymentDialog;
