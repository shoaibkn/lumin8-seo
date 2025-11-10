"use client";

import { useState, useEffect, useEffectEvent } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ArrowDownCircle, ArrowUpCircle, Wallet, XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { demoTransactions } from "@/transactions";
import { formatDateTime } from "@/lib/status-utils";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

// export const columns: ColumnDef<Payment>[] = [
export type Transaction = {
  id: string;
  userId: string;
  amount: number;
  status: "SUCCESS" | "FAILED" | "PENDING" | "REFUNDED";
  type: "CREDIT" | "DEBIT";
  merchantOrderId: string | null;
  paymentFlow: "UPI" | "CARD" | "NETBANKING" | "WALLET";
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

export const columns: ColumnDef<Transaction>[] = [
  {
    id: "select",
    header: () => "Description",
    cell: ({ row }) => (
      <div className="flex flex-row gap-2">
        <div className="w-10 h-10 rounded-full bg-accent/50 flex items-center justify-center">
          <Wallet strokeWidth={1} />
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-base text-nowrap w-48 md:w-full truncate">
            {row.original.description}
          </div>
          <div className="text-muted-foreground text-xs">
            <span>{row.original.paymentFlow}</span> |{" "}
            {/*@ts-expect-error error in function formatDateTime*/}
            <span>{formatDateTime(row.original.createdAt)}</span>
          </div>
        </div>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = row.getValue("amount") as number;
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",
      }).format(amount);
      return (
        <div
          className={`${row.original.type === "CREDIT" ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}
            text-xl text-nowrap w-full text-right`}
        >
          {row.original.type === "CREDIT" ? "+" : "-"}
          {formatted}
        </div>
      );
    },
  },
];

export function TransactionsTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [transactionData, setTransactionData] = useState(demoTransactions);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState<string | undefined>("ALL");
  const [searchText, setSearchText] = useState<string | undefined>();
  useEffect(() => {
    console.log(demoTransactions);
    fetchTransactions();
    setTransactionData(demoTransactions);
  }, []);

  const fetchTransactions = useEffectEvent(async () => {
    setLoading(true);
    const params = new URLSearchParams();

    if (searchText) {
      params.append("text", searchText);
    }

    if (type && type !== "ALL") {
      params.append("type", type.toUpperCase());
    }

    const url = `/api/transactions?${params.toString()}`;
    console.log(url);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      setTransactionData(data.transactions);
    } catch (error) {
      console.error("Failed to fetch transactions:", error);
    } finally {
      setLoading(false);
    }
  });

  useEffect(() => {
    fetchTransactions();
  }, [type, searchText]);

  const table = useReactTable({
    //@ts-expect-error fix later
    data: transactionData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full md:w-2/3">
      <ToggleGroup
        onValueChange={setType}
        className="mt-4"
        defaultValue={type}
        type="single"
        variant={"outline"}
        spacing={2}
        size={"sm"}
      >
        <ToggleGroupItem value="ALL">All</ToggleGroupItem>
        <ToggleGroupItem value="CREDIT">
          <ArrowDownCircle />
          Income
        </ToggleGroupItem>
        <ToggleGroupItem value="DEBIT">
          <ArrowUpCircle />
          Expense
        </ToggleGroupItem>
        <ToggleGroupItem value="failed">
          <XCircle />
          Failed
        </ToggleGroupItem>
      </ToggleGroup>
      <div className="flex items-center py-4">
        <Input
          placeholder="Type to search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md">
        <Table className="w-full">
          <TableHeader className="">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          {/*{JSON.stringify(table)}*/}
          {table && (
            <TableBody className="w-full">
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    className="border-b border-muted w-full h-24"
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          )}
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
