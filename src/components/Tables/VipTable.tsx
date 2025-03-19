import {
  getTierBgColor,
  getTierImageSrc,
  getTierTextColor,
} from "@/data/vipData";
import Image from "next/image";

interface VipTableProps {
  table: {
    label: string;
    data: {
      benefit: string;
      bronze: string;
      silver: string;
      gold: string;
      platinum: string;
      black: string;
    }[];
  };
}

const VipTable = ({ table }: VipTableProps) => {
  return (
    <div className="flex">
      <div className="w-0 flex-1 overflow-x-auto pb-3">
        <table className="w-full min-w-max">
          <thead>
            <tr>
              <th className="bg-card border-stroke w-60 rounded-t-2xl border-b px-3 text-start">
                {table.label}
              </th>
              {["Bronze", "Silver", "Gold", "Platinum", "Black"].map((tier) => (
                <th key={tier}>
                  <div
                    className="ml-2 flex min-w-max items-center justify-between gap-3 rounded-2xl px-4"
                    style={{
                      backgroundColor: getTierBgColor(tier),
                      color: getTierTextColor(tier),
                    }}
                  >
                    <Image
                      src={`/tiers/${getTierImageSrc(tier)}`}
                      alt={`${tier} Tier`}
                      width={60}
                      height={60}
                      priority
                      className="size-16"
                    />
                    <span>{tier}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.data.map((row, rowIndex) => (
              <tr key={row.benefit} className="text-center">
                <td
                  className={`bg-card p-3 text-start ${
                    rowIndex === table.data.length - 1 ? "rounded-b-2xl" : ""
                  }`}
                >
                  {row.benefit}
                </td>
                {(
                  ["bronze", "silver", "gold", "platinum", "black"] as const
                ).map((tier) => (
                  <td key={tier}>{row[tier]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VipTable;
