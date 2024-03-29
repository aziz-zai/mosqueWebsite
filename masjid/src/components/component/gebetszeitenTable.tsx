/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/yHI0oTEY0bs
 */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

export function GebetszeitenTable() {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="bg-gray-100">Description</TableHead>
            <TableHead className="bg-gray-200">Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="bg-gray-300">Standup meeting</TableCell>
            <TableCell className="bg-gray-400">10:00 AM</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-gray-100">Design review</TableCell>
            <TableCell className="bg-gray-200">2:00 PM</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-gray-300">Sprint planning</TableCell>
            <TableCell className="bg-gray-400">11:00 AM</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-gray-100">Client call</TableCell>
            <TableCell className="bg-gray-200">3:00 PM</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-gray-300">Team retrospective</TableCell>
            <TableCell className="bg-gray-400">4:00 PM</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
