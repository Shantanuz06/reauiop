import {
    List,
    ListItem,
    ListItemSuffix,
    Chip,
    Card,
  } from "@material-tailwind/react";
   
  const courses = [
    { cname:"web",
     cnos:"5" 
    },
    {cname:"dsa",
     cnos:"7" 
    },
    {cname:"cloud",
     cnos:"6" 
    },
    {cname:"iot",
     cnos:"9" 
    },
    {cname:"cyber",
     cnos:"7" 
    },
    {cname:"networks",
     cnos:"24" 
    },
    {cname:"programming",
     cnos:"4" 
    }
  ];
  export function ListWithBadge() {
    return (<div className="Cards">
    <span className=" m-2 text-xl font-semibold ">Categories </span>
        {courses.map((card, index) => (
            <Card className="w-96 m-2">
            <List>
            
              <ListItem>
              {card.cname}
                <ListItemSuffix>
                  <Chip
                    value={card.cnos}
                    variant="ghost"
                    size="sm"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
            </List>
            </Card>
        ))}
    </div>
      
    );
  }