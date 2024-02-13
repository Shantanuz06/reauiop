import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
   import "./comp.css";

   const cardData = [
    {
      title: 'course 1',
      content: 'Content for course 1',
      imgsrc: 'https://img.freepik.com/free-vector/world-map-with-global-technology-social-connection-network-with-nodes-links-vector-illustration_1284-1968.jpg?size=626&ext=jpg',
      syllabus:"write your content or the topics covered in the course"

    },
    {
      title: 'course 2',
      content: 'Content for course2 ',
      imgsrc: 'https://img.freepik.com/free-vector/global-communications-design-background_1048-12356.jpg?w=1380&t=st=1707826115~exp=1707826715~hmac=c5115197abf10ca21df91bc2d0a2c4aafebba1e4ce56265b0451e42375dd359a',
      syllabus:"write your content or the topics covered in the course"
    },
    {
      title: 'course 3',
      content: 'Content for course 3',
      imgsrc: 'https://img.freepik.com/free-photo/cloud-storage-background-business-network-design_53876-160252.jpg?w=1380&t=st=1707826142~exp=1707826742~hmac=fb99c6a18c823c9e966762f14ea4674ac5780dca58c4d6c4d716c88d94869201',
      syllabus:"write your content or the topics covered in the course"
    }
  ];

  export function SimpleCard() {
    return (
      <div className="flex flex-wrap  mt-2 w-96 ">
      {cardData.map((card, index) => (
          <Card className="Cards">
            <CardHeader
              className="m-1 w-5/5 shrink rounded-r-1">
              <img
                src={card.imgsrc}
                alt="src_img"
              />
            </CardHeader>
            <CardBody className="container">
              <Typography variant="h6" color="gray" className="mb-4 uppercase">
                {card.title}
              </Typography>
              <Typography variant="h4" color="blue-gray" className="mb-2">
                 {card.content}
              </Typography>
              <Typography color="gray" className="mb-8 font-normal">
                <span>
                  {card.syllabus}
                </span>
              </Typography>
              <a href="/" className="inline-block">
                <Button variant="text" className="flex items-center gap-2">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </a>
            </CardBody>
          </Card>
      ))}
      </div>
    );
  }

  