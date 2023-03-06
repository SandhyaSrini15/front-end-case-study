const tree = [
    {
      "id": 1,
      "label": "Home",
      "children": []
    },
    {
      "id": 2,
      "label": "About",
      "children": [
        {
          "id": 3,
          "label": "Our Story",
          "children": []
        },
        {
          "id": 4,
          "label": "Team",
          "children": [
            {
              "id": 10,
              "label": "Meet the team",
              "children": []
            },
            {
              "id": 11,
              "label": "Our Location",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "id": 5,
      "label": "Services",
      "children": [
        {
          "id": 6,
          "label": "Web Design",
          "children": []
        },
        {
          "id": 7,
          "label": "SEO",
          "children": []
        },
        {
          "id": 8,
          "label": "Social Media",
          "children": []
        }
      ]
    },
    {
      "id": 9,
      "label": "Contact Us",
      "children": []
    }
  ]
  

export async function GET(request) {
    return new Response(JSON.stringify(tree))
  }
  