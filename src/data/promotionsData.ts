export interface Promotion {
  id: number;
  label: string;
  description: string;
  expiry: string;
  claimed: boolean;
  group: string[];
}

export const promotions: Promotion[] = [
  {
    id: 0,
    label: "Promotion 1",
    description: "Promotion 1 Description in here",
    expiry: "12 Jan 2025",
    claimed: false,
    group: ["promotion", "slots"],
  },
  {
    id: 1,
    label: "Promotion 2",
    description: "Promotion 2 Description in here",
    expiry: "12 Jan 2025",
    claimed: true,
    group: ["promotion", "casino"],
  },
  {
    id: 2,
    label: "Promotion 3 With a bit longer name for testing",
    description: "Promotion 3 Description in here",
    expiry: "12 Jan 2025",
    claimed: true,
    group: ["promotion", "sports"],
  },
  {
    id: 3,
    label: "Promotion 4",
    description: "Promotion 4 Description in here",
    expiry: "12 Jan 2025",
    claimed: false,
    group: ["promotion", "rebate"],
  },
  {
    id: 4,
    label: "Promotion 5",
    description: "Promotion 5 Description in here",
    expiry: "12 Jan 2025",
    claimed: false,
    group: ["promotion", "vip"],
  },
  {
    id: 5,
    label: "Promotion 6",
    description: "Promotion 6 Description in here",
    expiry: "12 Jan 2025",
    claimed: false,
    group: ["promotion", "vip"],
  },
  {
    id: 6,
    label: "Promotion 7",
    description: "Promotion 7 Description in here",
    expiry: "12 Jan 2025",
    claimed: false,
    group: ["promotion", "slots"],
  },
];
