import {
  benefitsTable,
  dailyCashRebateTable,
  levelUpRequirementsTable,
  monthlyTierRetentionTable,
} from "@/data/vipData";
import VipTable from "@/components/Tables/VipTable";

const VipTableSection = () => {
  return (
    <div className="space-y-8">
      <VipTable table={benefitsTable} />
      <VipTable table={dailyCashRebateTable} />
      <VipTable table={levelUpRequirementsTable} />
      <VipTable table={monthlyTierRetentionTable} />
    </div>
  );
};

export default VipTableSection;
