import { NextResponse } from "next/server";
const tree = [
  {
    id: 1,
    label: "Home",
    children: [],
  },
  {
    id: 2,
    label: "About",
    children: [
      {
        id: 3,
        label: "Team",
        children: [
          {
            id: 4,
            label: "Meet the team",
            children: [
              {
                id: 10,
                label: "Members",
                children: [],
              },
              {
                id: 11,
                label: "Our Location",
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 14,
        label: "Our story",
        children: []
      }
    ],
  },
  {
    id: 5,
    label: "Services",
    children: [
      {
        id: 6,
        label: "Web Design",
        children: [],
      },
      {
        id: 7,
        label: "SEO",
        children: [],
      },
      {
        id: 8,
        label: "Social Media",
        children: [],
      },
    ],
  },
  {
    id: 9,
    label: "Contact Us",
    children: [],
  },
];

export async function GET(request) {
  return new Response(JSON.stringify(tree));
}
