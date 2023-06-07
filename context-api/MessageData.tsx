"use client";
import { createContext, useState } from "react";

export const MessageContext = createContext<any>({});

const MessageProvider = (props: any) => {
  const [routData, setRoutData] = useState<any>([
    {
      id: 1,
      name: "Killan James",
      message: "",
      number: 2,
      time: "4:30 PM",
      image: "/images.jpeg",
      email : "@killan james"
    },
  ]);

  const [filterChats, setFilterChats] = useState<any>([
    {
id:10,
message:"Hiii",
sent:false,
user:{
  id:10,
  name:"Killan James",
  pic:"/images.jpeg"
}
},
{
id:20,
message:"How are you",
sent:false,
user:{
  id:10,
  name:"Killan James",
  pic:"/images.jpeg"
}
},
{
id:30,
message:"i am fine",
sent:true,
user:{
  id:30,
  name:"Dristin Waston",
  pic:"/logo1.jpg"
}
},
{
id:40,
message:"How are you",
sent:true,
user:{
  id:30,
  name:"Killan James",
  pic:"/logo1.jpg"
}
},
{
id:50,
message:"i also good",
sent:false,
user:{
  id:50,
  name:"Dristin Waston",
  pic:"/images.jpeg"
}
},
{
id:60,
message:"what re you doing?",
sent:true,
user:{
  id:60,
  name:"Killan James",
  pic:"/logo1.jpg"
}
},
  ])

  const messageData = [
    {
      id: 1,
      name: "Killan James",
      message: "",
      number: 2,
      time: "4:30 PM",
      image: "/images.jpeg",
      email : "@killan james"
    },
    {
      id: 2,
      name: "Design Team",
      message: "Hello! Everyone",
      number: "",
      time: "9:36 AM",
      image: "/logo.webp",
      email : "@Designteam"
    },
    {
      id: 3,
      name: "Killan James",
      message: "Wow really Cool",
      number: 2,
      time: "1:15 PM",
      image: "/logo1.jpg",
      email : "@killan james"
    },
    {
      id: 4,
      name: "Calaudia Maudi",
      message: "",
      number: 2,
      time: "4:30 PM",
      image: "/images.jpeg",
      email : "@calaudiamaudi"
    },
    {
      id: 5,
      name: "Novita",
      message: "yah,nice design",
      number: "",
      time: "4:30 AM",
      image: "/logo.webp",
      email : "@novitashijuka"
    },
    {
      id: 6,
      name: "Milie Nose",
      message: "Awesome",
      number: 2,
      time: "8:20 PM",
      image: "/images.jpeg",
      email : "@milenose"
    },
    {
      id: 7,
      name: "Ikhsan SD",
      message: "voice message",
      number: 2,
      time: "yesterday",
      image: "/logo1.jpg",
      email : "@ikhsanSD"
    },
    {
      id: 8,
      name: "Aditya",
      message: "published now",
      number: "",
      time: "yesterday",
      image: "/logo.webp",
      email : "@adiytaPathak"
    },
    {
      id: 9,
      name: "Ahmed Medi",
      message: "Wow really Cool",
      number: 2,
      time: "1: 15 PM",
      image: "/logo1.jpg",
      email : "@ahmedBhai"
    },
  ];


  const chatsArr = [
    {
      id : 1,
      CHATS : [
        {
    id:10,
    message:"Hiii",
    sent:false,
    user:{
      id:10,
      name:"Killan James",
      pic:"/images.jpeg"
    }
  },
  {
    id:20,
    message:"How are you",
    sent:false,
    user:{
      id:10,
      name:"Killan James",
      pic:"/images.jpeg"
    }
  },
  {
    id:30,
    message:"i am fine",
    sent:true,
    user:{
      id:30,
      name:"Dristin Waston",
      pic:"/logo1.jpg"
    }
  },
  {
    id:40,
    message:"How are you",
    sent:true,
    user:{
      id:30,
      name:"Dristin Waston",
      pic:"/logo1.jpg"
    }
  },
  {
    id:50,
    message:"i also good",
    sent:false,
    user:{
      id:50,
      name:"Killan James",
      pic:"/images.jpeg"
    }
  },
  {
    id:60,
    message:"what re you doing?",
    sent:true,
    user:{
      id:60,
      name:"Dristin Waston",
      pic:"/logo1.jpg"
    }
  },
      ]
    },
    {
      id : 2,
      CHATS : [
        {
    id:10,
    message:"Changes",
    sent:true,
    user:{
      id:10,
      name:"James",
      pic:"/logo1.jpg"
    }
  },
  {
    id:20,
    message:"Changes",
    sent:true,
    user:{
      id:10,
      name:"James",
      pic:"/logo1.jpg"
    }
  },
  {
    id:30,
    message:"qwd",
    sent:false,
    user:{
      id:30,
      name:"Sharon",
      pic:"/images.jpeg"
    }
  }
      ]
    },
    {
      id:3,
      CHATS : [
        {id: 11,
        sent: false,
        message:"Hiii 1",
        user:{
          id: 11,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },
      {id: 12,
        sent: false,
        message:"Are you still a Web Designer?",
        user:{
          id: 11,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },
      {id: 13,
        sent: false,
        message:"I need a Web Designer, Are you free?",
        user:{
          id: 11,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },{id: 14,
        sent: true,
        message:"Hiii 2",
        user:{
          id: 14,
          name: "Dristin Waston",
          pic : "/logo.webp"
        }
      },
      {id: 15,
        sent: true,
        message:"yes I am still work in web Desiging ",
        user:{
          id: 14,
          name: "Dristin Waston",
          pic : "/logo.webp"
        }
      },
      {id: 15,
        sent: true,
        message:"Tell me, I am free now",
        user:{
          id: 14,
          name: "Dristin Waston",
          pic : "/logo.webp"
        }
      },
      {id: 16,
        sent: false,
        message:"I want to show you some Design",
        user:{
          id: 16,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },
      {id: 17,
        sent: false,
        message:"Please see and give me your feedback",
        user:{
          id: 16,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },
      {id: 18,
        sent: true,
        message:"ok send me",
        user:{
          id: 18,
          name: "Dristin Waston",
          pic : "/logo.webp"
        }
      },
      {id: 11,
        sent: false,
        message:"Hiii 3",
        user:{
          id: 11,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },
      {id: 12,
        sent: false,
        message:"Are you still a Web Designer?",
        user:{
          id: 11,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },
      {id: 13,
        sent: false,
        message:"I need a Web Designer, Are you free?",
        user:{
          id: 11,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },{id: 14,
        sent: true,
        message:"Hiii 4",
        user:{
          id: 14,
          name: "Dristin Waston",
          pic : "/logo.webp"
        }
      },
      {id: 15,
        sent: true,
        message:"yes I am still work in web Desiging ",
        user:{
          id: 14,
          name: "Dristin Waston",
          pic : "/logo.webp"
        }
      },
      {id: 15,
        sent: true,
        message:"Tell me, I am free now",
        user:{
          id: 14,
          name: "Dristin Waston",
          pic : "/logo.webp"
        }
      },
      {id: 16,
        sent: false,
        message:"I want to show you some Design",
        user:{
          id: 16,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },
      {id: 17,
        sent: false,
        message:"Please see and give me your feedback",
        user:{
          id: 16,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },
      {id: 18,
        sent: true,
        message:"ok send me",
        user:{
          id: 18,
          name: "Dristin Waston",
          pic : "/logo.webp"
        }
      },
      {id: 11,
        sent: false,
        message:"Hiii 5",
        user:{
          id: 11,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },
      {id: 12,
        sent: false,
        message:"Are you still a Web Designer?",
        user:{
          id: 11,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },
      {id: 13,
        sent: false,
        message:"I need a Web Designer, Are you free?",
        user:{
          id: 11,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },{id: 14,
        sent: true,
        message:"Hiii 6",
        user:{
          id: 14,
          name: "Dristin Waston",
          pic : "/logo.webp"
        }
      },
      {id: 15,
        sent: true,
        message:"yes I am still work in web Desiging ",
        user:{
          id: 14,
          name: "Dristin Waston",
          pic : "/logo.webp"
        }
      },
      {id: 15,
        sent: true,
        message:"Tell me, I am free now",
        user:{
          id: 14,
          name: "Dristin Waston",
          pic : "/logo.webp"
        }
      },
      {id: 16,
        sent: false,
        message:"I want to show you some Design",
        user:{
          id: 16,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },
      {id: 17,
        sent: false,
        message:"Please see and give me your feedback",
        user:{
          id: 16,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },
      {id: 18,
        sent: true,
        message:"ok send me",
        user:{
          id: 18,
          name: "Dristin Waston",
          pic : "/logo.webp"
        }
      },
      {id: 11,
        sent: false,
        message:"Hiii 7",
        user:{
          id: 11,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },
      {id: 12,
        sent: false,
        message:"Are you still a Web Designer?",
        user:{
          id: 11,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },
      {id: 13,
        sent: false,
        message:"I need a Web Designer, Are you free?",
        user:{
          id: 11,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },{id: 14,
        sent: true,
        message:"Hiii 8",
        user:{
          id: 14,
          name: "Dristin Waston",
          pic : "/logo.webp"
        }
      },
      {id: 15,
        sent: true,
        message:"yes I am still work in web Desiging ",
        user:{
          id: 14,
          name: "Dristin Waston",
          pic : "/logo.webp"
        }
      },
      {id: 15,
        sent: true,
        message:"Tell me, I am free now",
        user:{
          id: 14,
          name: "Dristin Waston",
          pic : "/logo.webp"
        }
      },
      {id: 16,
        sent: false,
        message:"I want to show you some Design",
        user:{
          id: 16,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },
      {id: 17,
        sent: false,
        message:"Please see and give me your feedback",
        user:{
          id: 16,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },
      {id: 18,
        sent: true,
        message:"ok send me",
        user:{
          id: 18,
          name: "Dristin Waston",
          pic : "/logo.webp"
        }
      },
      {id: 11,
        sent: false,
        message:"Hiii 9",
        user:{
          id: 11,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },
      {id: 12,
        sent: false,
        message:"Are you still a Web Designer?",
        user:{
          id: 11,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },
      {id: 13,
        sent: false,
        message:"I need a Web Designer, Are you free?",
        user:{
          id: 11,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },{id: 14,
        sent: true,
        message:"Hiii 10",
        user:{
          id: 14,
          name: "Dristin Waston",
          pic : "/logo.webp"
        }
      },
      {id: 15,
        sent: true,
        message:"yes I am still work in web Desiging ",
        user:{
          id: 14,
          name: "Dristin Waston",
          pic : "/logo.webp"
        }
      },
      {id: 15,
        sent: true,
        message:"Tell me, I am free now",
        user:{
          id: 14,
          name: "Dristin Waston",
          pic : "/logo.webp"
        }
      },
      {id: 16,
        sent: false,
        message:"I want to show you some Design",
        user:{
          id: 16,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },
      {id: 17,
        sent: false,
        message:"Please see and give me your feedback",
        user:{
          id: 16,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },
      {id: 18,
        sent: true,
        message:"ok send me",
        user:{
          id: 18,
          name: "Dristin Waston",
          pic : "/logo.webp"
        }
      },
      {id: 11,
        sent: false,
        message:"Hiii  11",
        user:{
          id: 11,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },
      {id: 12,
        sent: false,
        message:"Are you still a Web Designer?",
        user:{
          id: 11,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },
      {id: 13,
        sent: false,
        message:"I need a Web Designer, Are you free?",
        user:{
          id: 11,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },{id: 14,
        sent: true,
        message:"Hiii 12",
        user:{
          id: 14,
          name: "Dristin Waston",
          pic : "/logo.webp"
        }
      },
      {id: 15,
        sent: true,
        message:"yes I am still work in web Desiging ",
        user:{
          id: 14,
          name: "Dristin Waston",
          pic : "/logo.webp"
        }
      },
      {id: 15,
        sent: true,
        message:"Tell me, I am free now",
        user:{
          id: 14,
          name: "Dristin Waston",
          pic : "/logo.webp"
        }
      },
      {id: 16,
        sent: false,
        message:"I want to show you some Design",
        user:{
          id: 16,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },
      {id: 17,
        sent: false,
        message:"Please see and give me your feedback",
        user:{
          id: 16,
          name: "Killan James",
          pic : "/logo1.jpg"
        }
      },
      {id: 18,
        sent: true,
        message:"ok send me",
        user:{
          id: 18,
          name: "Dristin Waston",
          pic : "/logo.webp"
        }
      }
      ]
    }
  ]


  const filterData = (id: any) => {
    const singleData = messageData.filter((items) => items.id === id);
    const chatsfilter = chatsArr.filter((items : any) => items.id === id)
    setFilterChats(chatsfilter[0].CHATS)
    setRoutData(singleData);
  };

  return (
    <MessageContext.Provider
      value={{ messageData, filterData, routData, filterChats }}
    >
      {props.children}
    </MessageContext.Provider>
  );
};

export default MessageProvider;
