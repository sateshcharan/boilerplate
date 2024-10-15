import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

const transactions = [
  {
    id: "1",
    name: "Liam Johnson",
    email: "liam@example.com",
    type: "Sale",
    status: "Approved",
    date: "2023-06-23",
    amount: "$250.00",
  },
  {
    id: "2",
    name: "Olivia Smith",
    email: "olivia@example.com",
    type: "Refund",
    status: "Declined",
    date: "2023-06-24",
    amount: "$150.00",
  },
  {
    id: "3",
    name: "Noah Williams",
    email: "noah@example.com",
    type: "Subscription",
    status: "Approved",
    date: "2023-06-25",
    amount: "$350.00",
  },
  {
    id: "4",
    name: "Emma Brown",
    email: "emma@example.com",
    type: "Sale",
    status: "Approve",
    date: "2023-06-26",
    amount: "$450.00",
  },
  {
    id: "5",
    name: "Liam Johnson",
    email: "liam@example.com",
    type: "Sale",
    status: "Approved",
    date: "2023-06-27",
    amount: "$550.00",
  },
];

const recentSales = [
  {
    id: "1",
    name: "Liam Johnson",
    email: "liam@example.com",
    amount: "+$1,999.00",
    avatar: "/avatars/01.png",
  },
  {
    id: "2",
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: "+$39.00",
    avatar: "/avatars/02.png",
  },
  {
    id: "3",
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: "+$299.00",
    avatar: "/avatars/03.png",
  },
  {
    id: "4",
    name: "William Kim",
    email: "will@email.com",
    amount: "+$99.00",
    avatar: "/avatars/04.png",
  },
  {
    id: "5",
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: "+$39.00",
    avatar: "/avatars/05.png",
  },
  {
    id: "6",
    name: "Liam Johnson",
    email: "liam@example.com",
    amount: "+$1,999.00",
    avatar: "/avatars/06.png",
  },
];

const orderHighlights = [
  {
    id: "1",
    title: "Total Revenue",
    value: "$45,231.89",
    message: "+20.1% from last month",
    icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
  },
  {
    id: "2",
    title: "Subscriptions",
    value: "$2350",
    message: "+180.1% from last month",
    icon: <Users className="h-4 w-4 text-muted-foreground" />,
  },
  {
    id: "3",
    title: "Sales",
    value: "+573",
    message: "+19% from last month",
    icon: <CreditCard className="h-4 w-4 text-muted-foreground" />,
  },
  {
    id: "4",
    title: "Active Now",
    value: "+573",
    message: "+201 since last hour",
    icon: <Activity className="h-4 w-4 text-muted-foreground" />,
  },
];

export { transactions, recentSales, orderHighlights };
