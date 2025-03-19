export const tiers = ["bronze", "silver", "gold", "platinum", "black"];

export const vipData = [
  // Bronze Tier
  {
    tier: "bronze",
    bgColor: "#FFEFE4",
    headerGradient: ["#EAB08F", "#F5EFEA"],
    textGradient: ["#542D20", "#542D20"],
    textColor: "#542D20",
    imageSrc: "/tiers/bronze.svg",
    visibleSections: [
      {
        title: "vipBenefits",
        items: [
          { value: "UpgradeBonus.bronze", label: "UpgradeBonus.label" },
          {
            value: "DailyWithdrawAmount.bronze",
            label: "DailyWithdrawAmount.label",
          },
          {
            value: "DailyWithdrawLimit.bronze",
            label: "DailyWithdrawLimit.label",
          },
          { value: "BirthdayBonus.bronze", label: "BirthdayBonus.label" },
          {
            value: "WeeklyRescueBonus.bronze",
            label: "WeeklyRescueBonus.label",
          },
          { value: "ReferralFriend.bronze", label: "ReferralFriend.label" },
          { value: "FestivalCash.bronze", label: "FestivalCash.label" },
          {
            value: "SpecialBirthdayGift.bronze",
            label: "SpecialBirthdayGift.label",
          },
        ],
      },
    ],
    hiddenSections: [
      {
        title: "dailyCashRebate",
        items: [
          { value: "Esports.bronze", label: "Esports.label" },
          { value: "LiveCasino.bronze", label: "LiveCasino.label" },
          { value: "Slot.bronze", label: "Slot.label" },
          { value: "Sportsbook.bronze", label: "Sportsbook.label" },
        ],
      },
      {
        title: "levelUpRequirements",
        items: [
          {
            value: "AccumulatedDeposit.bronze",
            label: "AccumulatedDeposit.label",
          },
        ],
      },
      {
        title: "monthlyTierRetention",
        items: [
          {
            value: "MembershipRenewal.bronze",
            label: "MembershipRenewal.label",
          },
        ],
      },
    ],
  },

  // Silver Tier
  {
    tier: "silver",
    bgColor: "#F5F5F5",
    headerGradient: ["#B5C3D1", "#E2EBF3"],
    textGradient: ["#051144", "#606D94"],
    textColor: "#051144",
    imageSrc: "/tiers/silver.svg",
    visibleSections: [
      {
        title: "vipBenefits",
        items: [
          { value: "UpgradeBonus.silver", label: "UpgradeBonus.label" },
          {
            value: "DailyWithdrawAmount.silver",
            label: "DailyWithdrawAmount.label",
          },
          {
            value: "DailyWithdrawLimit.silver",
            label: "DailyWithdrawLimit.label",
          },
          { value: "BirthdayBonus.silver", label: "BirthdayBonus.label" },
          {
            value: "WeeklyRescueBonus.silver",
            label: "WeeklyRescueBonus.label",
          },
          { value: "ReferralFriend.silver", label: "ReferralFriend.label" },
          { value: "FestivalCash.silver", label: "FestivalCash.label" },
          {
            value: "SpecialBirthdayGift.silver",
            label: "SpecialBirthdayGift.label",
          },
        ],
      },
    ],
    hiddenSections: [
      {
        title: "dailyCashRebate",
        items: [
          { value: "Esports.silver", label: "Esports.label" },
          { value: "LiveCasino.silver", label: "LiveCasino.label" },
          { value: "Slot.silver", label: "Slot.label" },
          { value: "Sportsbook.silver", label: "Sportsbook.label" },
        ],
      },
      {
        title: "levelUpRequirements",
        items: [
          {
            value: "AccumulatedDeposit.silver",
            label: "AccumulatedDeposit.label",
          },
        ],
      },
      {
        title: "monthlyTierRetention",
        items: [
          {
            value: "MembershipRenewal.silver",
            label: "MembershipRenewal.label",
          },
        ],
      },
    ],
  },

  // Gold Tier
  {
    tier: "gold",
    bgColor: "#FFF6E3",
    headerGradient: ["#EAC78F", "#F5F2EA"],
    textGradient: ["#443405", "#CD9843"],
    textColor: "#443405",
    imageSrc: "/tiers/gold.svg",
    visibleSections: [
      {
        title: "vipBenefits",
        items: [
          { value: "UpgradeBonus.gold", label: "UpgradeBonus.label" },
          {
            value: "DailyWithdrawAmount.gold",
            label: "DailyWithdrawAmount.label",
          },
          {
            value: "DailyWithdrawLimit.gold",
            label: "DailyWithdrawLimit.label",
          },
          { value: "BirthdayBonus.gold", label: "BirthdayBonus.label" },
          {
            value: "WeeklyRescueBonus.gold",
            label: "WeeklyRescueBonus.label",
          },
          { value: "ReferralFriend.gold", label: "ReferralFriend.label" },
          { value: "FestivalCash.gold", label: "FestivalCash.label" },
          {
            value: "SpecialBirthdayGift.gold",
            label: "SpecialBirthdayGift.label",
          },
        ],
      },
    ],
    hiddenSections: [
      {
        title: "dailyCashRebate",
        items: [
          { value: "Esports.gold", label: "Esports.label" },
          { value: "LiveCasino.gold", label: "LiveCasino.label" },
          { value: "Slot.gold", label: "Slot.label" },
          { value: "Sportsbook.gold", label: "Sportsbook.label" },
        ],
      },
      {
        title: "levelUpRequirements",
        items: [
          {
            value: "AccumulatedDeposit.gold",
            label: "AccumulatedDeposit.label",
          },
        ],
      },
      {
        title: "monthlyTierRetention",
        items: [
          {
            value: "MembershipRenewal.gold",
            label: "MembershipRenewal.label",
          },
        ],
      },
    ],
  },

  // Platinum Tier
  {
    tier: "platinum",
    bgColor: "#F1EFFF",
    headerGradient: ["#CBBCEB", "#CBE7FF"],
    textGradient: ["#3C0544", "#946088"],
    textColor: "#3C0544",
    imageSrc: "/tiers/platinum.svg",
    visibleSections: [
      {
        title: "vipBenefits",
        items: [
          { value: "UpgradeBonus.platinum", label: "UpgradeBonus.label" },
          {
            value: "DailyWithdrawAmount.platinum",
            label: "DailyWithdrawAmount.label",
          },
          {
            value: "DailyWithdrawLimit.platinum",
            label: "DailyWithdrawLimit.label",
          },
          { value: "BirthdayBonus.platinum", label: "BirthdayBonus.label" },
          {
            value: "WeeklyRescueBonus.platinum",
            label: "WeeklyRescueBonus.label",
          },
          { value: "ReferralFriend.platinum", label: "ReferralFriend.label" },
          { value: "FestivalCash.platinum", label: "FestivalCash.label" },
          {
            value: "SpecialBirthdayGift.platinum",
            label: "SpecialBirthdayGift.label",
          },
        ],
      },
    ],
    hiddenSections: [
      {
        title: "dailyCashRebate",
        items: [
          { value: "Esports.platinum", label: "Esports.label" },
          { value: "LiveCasino.platinum", label: "LiveCasino.label" },
          { value: "Slot.platinum", label: "Slot.label" },
          { value: "Sportsbook.platinum", label: "Sportsbook.label" },
        ],
      },
      {
        title: "levelUpRequirements",
        items: [
          {
            value: "AccumulatedDeposit.platinum",
            label: "AccumulatedDeposit.label",
          },
        ],
      },
      {
        title: "monthlyTierRetention",
        items: [
          {
            value: "MembershipRenewal.platinum",
            label: "MembershipRenewal.label",
          },
        ],
      },
    ],
  },

  // Black Tier
  {
    tier: "black",
    bgColor: "#D9C9C9",
    headerGradient: ["#1B0000", "#353535"],
    textGradient: ["#7F2D2D", "#D86666"],
    textColor: "#7F2D2D",
    imageSrc: "/tiers/dark.svg",
    visibleSections: [
      {
        title: "vipBenefits",
        items: [
          { value: "UpgradeBonus.black", label: "UpgradeBonus.label" },
          {
            value: "DailyWithdrawAmount.black",
            label: "DailyWithdrawAmount.label",
          },
          {
            value: "DailyWithdrawLimit.black",
            label: "DailyWithdrawLimit.label",
          },
          { value: "BirthdayBonus.black", label: "BirthdayBonus.label" },
          {
            value: "WeeklyRescueBonus.black",
            label: "WeeklyRescueBonus.label",
          },
          { value: "ReferralFriend.black", label: "ReferralFriend.label" },
          { value: "FestivalCash.black", label: "FestivalCash.label" },
          {
            value: "SpecialBirthdayGift.black",
            label: "SpecialBirthdayGift.label",
          },
        ],
      },
    ],
    hiddenSections: [
      {
        title: "dailyCashRebate",
        items: [
          { value: "Esports.black", label: "Esports.label" },
          { value: "LiveCasino.black", label: "LiveCasino.label" },
          { value: "Slot.black", label: "Slot.label" },
          { value: "Sportsbook.black", label: "Sportsbook.label" },
        ],
      },
      {
        title: "levelUpRequirements",
        items: [
          {
            value: "AccumulatedDeposit.black",
            label: "AccumulatedDeposit.label",
          },
        ],
      },
      {
        title: "monthlyTierRetention",
        items: [
          {
            value: "MembershipRenewal.black",
            label: "MembershipRenewal.label",
          },
        ],
      },
    ],
  },
];

export const benefitsTable = {
  label: "vipBenefits",
  data: [
    {
      benefit: "UpgradeBonus.label",
      bronze: "UpgradeBonus.bronze",
      silver: "UpgradeBonus.silver",
      gold: "UpgradeBonus.gold",
      platinum: "UpgradeBonus.platinum",
      black: "UpgradeBonus.black",
    },
    {
      benefit: "DailyWithdrawAmount.label",
      bronze: "DailyWithdrawAmount.bronze",
      silver: "DailyWithdrawAmount.silver",
      gold: "DailyWithdrawAmount.gold",
      platinum: "DailyWithdrawAmount.platinum",
      black: "DailyWithdrawAmount.black",
    },
    {
      benefit: "DailyWithdrawLimit.label",
      bronze: "DailyWithdrawLimit.bronze",
      silver: "DailyWithdrawLimit.silver",
      gold: "DailyWithdrawLimit.gold",
      platinum: "DailyWithdrawLimit.platinum",
      black: "DailyWithdrawLimit.black",
    },
    {
      benefit: "BirthdayBonus.label",
      bronze: "BirthdayBonus.bronze",
      silver: "BirthdayBonus.silver",
      gold: "BirthdayBonus.gold",
      platinum: "BirthdayBonus.platinum",
      black: "BirthdayBonus.black",
    },
    {
      benefit: "WeeklyRescueBonus.label",
      bronze: "WeeklyRescueBonus.bronze",
      silver: "WeeklyRescueBonus.silver",
      gold: "WeeklyRescueBonus.gold",
      platinum: "WeeklyRescueBonus.platinum",
      black: "WeeklyRescueBonus.black",
    },
    {
      benefit: "ReferralFriend.label",
      bronze: "ReferralFriend.bronze",
      silver: "ReferralFriend.silver",
      gold: "ReferralFriend.gold",
      platinum: "ReferralFriend.platinum",
      black: "ReferralFriend.black",
    },
    {
      benefit: "FestivalCash.label",
      bronze: "FestivalCash.bronze",
      silver: "FestivalCash.silver",
      gold: "FestivalCash.gold",
      platinum: "FestivalCash.platinum",
      black: "FestivalCash.black",
    },
    {
      benefit: "SpecialBirthdayGift.label",
      bronze: "SpecialBirthdayGift.bronze",
      silver: "SpecialBirthdayGift.silver",
      gold: "SpecialBirthdayGift.gold",
      platinum: "SpecialBirthdayGift.platinum",
      black: "SpecialBirthdayGift.black",
    },
  ],
};

export const dailyCashRebateTable = {
  label: "dailyCashRebate",
  data: [
    {
      benefit: "Esports.label",
      bronze: "Esports.bronze",
      silver: "Esports.silver",
      gold: "Esports.gold",
      platinum: "Esports.platinum",
      black: "Esports.black",
    },
    {
      benefit: "LiveCasino.label",
      bronze: "LiveCasino.bronze",
      silver: "LiveCasino.silver",
      gold: "LiveCasino.gold",
      platinum: "LiveCasino.platinum",
      black: "LiveCasino.black",
    },
    {
      benefit: "Slot.label",
      bronze: "Slot.bronze",
      silver: "Slot.silver",
      gold: "Slot.gold",
      platinum: "Slot.platinum",
      black: "Slot.black",
    },
    {
      benefit: "Sportsbook.label",
      bronze: "Sportsbook.bronze",
      silver: "Sportsbook.silver",
      gold: "Sportsbook.gold",
      platinum: "Sportsbook.platinum",
      black: "Sportsbook.black",
    },
  ],
};

export const levelUpRequirementsTable = {
  label: "levelUpRequirements",
  data: [
    {
      benefit: "AccumulatedDeposit.label",
      bronze: "AccumulatedDeposit.bronze",
      silver: "AccumulatedDeposit.silver",
      gold: "AccumulatedDeposit.gold",
      platinum: "AccumulatedDeposit.platinum",
      black: "AccumulatedDeposit.black",
    },
  ],
};

export const monthlyTierRetentionTable = {
  label: "monthlyTierRetention",
  data: [
    {
      benefit: "MembershipRenewal.label",
      bronze: "MembershipRenewal.bronze",
      silver: "MembershipRenewal.silver",
      gold: "MembershipRenewal.gold",
      platinum: "MembershipRenewal.platinum",
      black: "MembershipRenewal.black",
    },
  ],
};

export function getTierBgColor(tier: string) {
  const colors: { [key: string]: string } = {
    bronze: "#FFEFE4",
    silver: "#F5F5F5",
    gold: "#FFF6E3",
    platinum: "#F1EFFF",
    black: "#D9C9C9",
  };
  return colors[tier];
}

export function getTierTextColor(tier: string) {
  const colors: { [key: string]: string } = {
    bronze: "#542D20",
    silver: "#051144",
    gold: "#443405",
    platinum: "#3C0544",
    black: "#7F2D2D",
  };
  return colors[tier];
}

export function getTierImageSrc(tier: string) {
  const images: { [key: string]: string } = {
    bronze: "bronze.svg",
    silver: "silver.svg",
    gold: "gold.svg",
    platinum: "platinum.svg",
    black: "dark.svg",
  };
  return images[tier];
}
