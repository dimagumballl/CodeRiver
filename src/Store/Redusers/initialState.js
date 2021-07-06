const initialState = {
    FS:2,
    Menu:false,
    SKILLS:{
        1:{
            name:"PHOTOGRAPHY",
            color:"rgb(4, 116, 200)"  
          },
        2:{
                      name:"DESIGN",
                      color:"rgb(55, 172, 193)"  
        },
    },
    ListOfUser:{
        
        1:{
            
            avatar:"/image/Users/u1.png",
            status:true,
            rang:"User",
            personal_info:{
                fname:"Ivan",
                sname:"Lavrov",
                fs:"Ivan L.",
                profession:"Beta Tester | Ultimate User",
                email:"jordan.jackson@dashbord.com",
                mobile:"+44(0) 7887 665 588",
                skill_level:"Senior (50K+)",
                paid_out_limit:{
                    n:200,
                    m:1000
                },
                bio:"Jordan graduated from Cornell University in 2004 with a Bachelor degree in computer science and a specialization in mathematics. While there, he published two articles on Code-project. ",
                skills:{
                    1:{
                      name:"PHOTOGRAPHY",
                      color:"rgb(4, 116, 200)"  
                    },
                    2:{
                      name:"TEACHER",
                      color:"rgb(69, 184, 84)"  
                    },
                    3:{
                      name:"TRAVELER",
                      color:"rgb(129, 145, 166)"  
                    },
                    4:{
                      name:"IOS",
                      color:"rgb(248, 107, 103)"   
                    },
                }
            },
            personal_event:{
                1:{
                    name:"Super Photography 2016",
                    data:"Junuary 13th, Vinna 6:30 PM",
                    skills:{
                        name:"PHOTOGRAPHY",
                        color:"rgb(4, 116, 200)"  
                    }
                },
                2:{
                    name:"Phot Expo",
                    data:"March 28th, Paris - 7:30 PM",
                    skills:{
                      name:"DESIGN",
                      color:"rgb(55, 172, 193)" 
                    }
                }
            },
            invite:132,
            search:"",
            friends:{
                1:{
                    name:"Carolina",
                    status:true,
                    profession:"Designer",
                    typing:false,
                    avatar:"/image/Friends/1.png",
                    mes:2,
                },
                2:{
                    name:"Clare",
                    status:true,
                    profession:"Designer",
                    typing:false,
                    avatar:"/image/Friends/2.png",
                    mes:0
                },
                3:{
                    name:"Lina",
                    status:false,
                    profession:"Sales Manager",
                    typing:false,
                    avatar:"/image/Friends/3.png",
                    mes:0
                },
                4:{
                    name:"Jason",
                    status:true,
                    profession:"CTO",
                    typing:false,
                    avatar:"/image/Friends/4.png",
                    mes:0
                },
                5:{
                    name:"Dash",
                    status:false,
                    profession:"Designer Lead",
                    typing:false,
                    avatar:"/image/Friends/5.png",
                    mes:0
                },
                6:{
                    name:"Jessica",
                    status:true,
                    profession:"Designer",
                    typing:false,
                    avatar:"/image/Friends/6.png",
                    mes:0
                }
            },

            ernings_history:{
                N:[
                    {
                        name:"",
                        data: [99, 101, 303, 88, 102, 402, 105, 153, 108, 223],
                        color:"rgb(37,157,245)"
                        
                    }
                ],
                categori:[" ", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", " "]

            },
            stats:{
                new_orders:{
                    n:3594,
                    up:true,
                    in:13
                },
                totals_sales:{
                    n:105990,
                    up:true,
                    in:4
                },
                total_paid_out:{
                    n:50890,
                    up:false,
                    in:21
                },
                new_customers:{
                    n:453,
                    up:false,
                    in:5
                }
            },
            Referrer:{
                1:{
                    name:"note.com",
                    views:"54",
                    sales:"12",
                    coversion:"10.5",
                    total:"50"

                },
                2:{
                    name:"Direct, email, IM",
                    views:"96",
                    sales:"24",
                    coversion:"25",
                    total:"10"
                },
                3:{
                    name:"Recommended",
                    views:"5",
                    sales:"5",
                    coversion:"100",
                    total:"10"
                },
                4:{
                    name:"Dribbble",
                    views:"1",
                    sales:"0",
                    coversion:"0.0",
                    total:"0"
                },
                5:{
                    name:"google.co.uk",
                    views:"5",
                    sales:"0",
                    coversion:"0.0",
                    total:"0"
                },
                6:{
                    name:"google.com.tr",
                    views:"0",
                    sales:"0",
                    coversion:"0.0",
                    total:"0"
                },
                7:{
                    name:"mail.google.com",
                    views:"1",
                    sales:"0",
                    coversion:"0.0",
                    total:"0"
                },
                8:{
                    name:"facebook.com",
                    views:"5",
                    sales:"0",
                    coversion:"0.0",
                    total:"0"
                }
            }
        },
        2:{
            
            avatar:"/image/Users/u2.png",
            status:true,
            rang:"Administrator",
            personal_info:{
                fname:"Jordan",
                sname:"Jackson",
                fs:"Jordan J.",
                profession:"Beta Tester | Ultimate User",
                email:"jordan.jackson@dashbord.com",
                mobile:"+44(0) 7887 665 588",
                skill_level:"Senior (50K+)",
                paid_out_limit:{
                    n:580,
                    m:750
                },
                bio:"Jordan graduated from Cornell University in 2004 with a Bachelor degree in computer science and a specialization in mathematics. While there, he published two articles on Code-project. ",
                skills:{
                    1:{
                      name:"PHOTOGRAPHY",
                      color:"rgb(4, 116, 200)"  
                    },
                    2:{
                      name:"TEACHER",
                      color:"rgb(69, 184, 84)"  
                    },
                    3:{
                      name:"TRAVELER",
                      color:"rgb(129, 145, 166)"  
                    },
                    4:{
                      name:"IOS",
                      color:"rgb(248, 107, 103)"   
                    },
                }
            },
            personal_event:{
                1:{
                    name:"Super Photography 2016",
                    data:"Junuary 13th, Vinna 6:30 PM",
                    skills:{
                        name:"PHOTOGRAPHY",
                        color:"rgb(4, 116, 200)"  
                    }
                },
                2:{
                    name:"Phot Expo",
                    data:"March 28th, Paris - 7:30 PM",
                    skills:{
                      name:"DESIGN",
                      color:"rgb(55, 172, 193)" 
                    }
                }
            },
            invite:54,
            search:"",
            friends:{
                1:{
                    name:"Carolina",
                    status:true,
                    profession:"Designer",
                    typing:true,
                    avatar:"/image/Friends/1.png",
                    mes:2,
                },
                2:{
                    name:"Clare",
                    status:true,
                    profession:"Designer",
                    typing:false,
                    avatar:"/image/Friends/2.png",
                    mes:0
                },
                3:{
                    name:"Lina",
                    status:false,
                    profession:"Sales Manager",
                    typing:false,
                    avatar:"/image/Friends/3.png",
                    mes:0
                },
                4:{
                    name:"Jason",
                    status:true,
                    profession:"CTO",
                    typing:false,
                    avatar:"/image/Friends/4.png",
                    mes:0
                },
                5:{
                    name:"Dash",
                    status:false,
                    profession:"Designer Lead",
                    typing:false,
                    avatar:"/image/Friends/5.png",
                    mes:0
                },
                6:{
                    name:"Jessica",
                    status:true,
                    profession:"Designer",
                    typing:false,
                    avatar:"/image/Friends/6.png",
                    mes:0
                }
            },

            ernings_history:{
                N:[
                    {
                        name:"",
                        data: [99, 101, 303, 88, 102, 402, 105, 153, 108, 223],
                        color:"rgb(37,157,245)"
                    }
                ],
                categori:[" ", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", " "]

            },
            stats:{
                new_orders:{
                    n:3594,
                    up:true,
                    in:13
                },
                totals_sales:{
                    n:105990,
                    up:true,
                    in:4
                },
                total_paid_out:{
                    n:50890,
                    up:false,
                    in:21
                },
                new_customers:{
                    n:453,
                    up:false,
                    in:5
                }
            },
            Referrer:{
                1:{
                    name:"note.com",
                    views:"54",
                    sales:"12",
                    coversion:"10.5",
                    total:"50"

                },
                2:{
                    name:"Direct, email, IM",
                    views:"96",
                    sales:"24",
                    coversion:"25",
                    total:"10"
                },
                3:{
                    name:"Recommended",
                    views:"5",
                    sales:"5",
                    coversion:"100",
                    total:"10"
                },
                4:{
                    name:"Dribbble",
                    views:"1",
                    sales:"0",
                    coversion:"0.0",
                    total:"0"
                },
                5:{
                    name:"google.co.uk",
                    views:"5",
                    sales:"0",
                    coversion:"0.0",
                    total:"0"
                },
                6:{
                    name:"google.com.tr",
                    views:"0",
                    sales:"0",
                    coversion:"0.0",
                    total:"0"
                },
                7:{
                    name:"mail.google.com",
                    views:"1",
                    sales:"0",
                    coversion:"0.0",
                    total:"0"
                },
                8:{
                    name:"facebook.com",
                    views:"5",
                    sales:"0",
                    coversion:"0.0",
                    total:"0"
                }
            }
        },
        3:{
            
            avatar:"/image/Users/u3.png",
            status:true,
            rang:"User",
            personal_info:{
                fname:"Nady",
                sname:"Voronzova",
                fs:"Nady V.",
                profession:"Beta Tester | Ultimate User",
                email:"jordan.jackson@dashbord.com",
                mobile:"+44(0) 7887 665 588",
                skill_level:"Senior (50K+)",
                paid_out_limit:{
                    n:580,
                    m:600
                },
                bio:"Jordan graduated from Cornell University in 2004 with a Bachelor degree in computer science and a specialization in mathematics. While there, he published two articles on Code-project. ",
                skills:{
                    1:{
                      name:"PHOTOGRAPHY",
                      color:"rgb(4, 116, 200)"  
                    },
                    2:{
                      name:"TEACHER",
                      color:"rgb(69, 184, 84)"  
                    },
                    3:{
                      name:"TRAVELER",
                      color:"rgb(129, 145, 166)"  
                    },
                    4:{
                      name:"IOS",
                      color:"rgb(248, 107, 103)"   
                    },
                }
            },
            personal_event:{
                1:{
                    name:"Super Photography 2016",
                    data:"Junuary 13th, Vinna 6:30 PM",
                    skills:{
                        name:"PHOTOGRAPHY",
                        color:"rgb(4, 116, 200)"  
                    }
                },
                2:{
                    name:"Phot Expo",
                    data:"March 28th, Paris - 7:30 PM",
                    skills:{
                      name:"DESIGN",
                      color:"rgb(55, 172, 193)" 
                    }
                }
            },
            invite:76,
            search:"",
            friends:{
                1:{
                    name:"Carolina",
                    status:true,
                    profession:"Designer",
                    typing:false,
                    avatar:"/image/Friends/1.png",
                    mes:2,
                },
                2:{
                    name:"Clare",
                    status:true,
                    profession:"Designer",
                    typing:false,
                    avatar:"/image/Friends/2.png",
                    mes:0
                },
                3:{
                    name:"Lina",
                    status:false,
                    profession:"Sales Manager",
                    typing:false,
                    avatar:"/image/Friends/3.png",
                    mes:0
                },
                4:{
                    name:"Jason",
                    status:true,
                    profession:"CTO",
                    typing:false,
                    avatar:"/image/Friends/4.png",
                    mes:0
                },
                5:{
                    name:"Dash",
                    status:false,
                    profession:"Designer Lead",
                    typing:false,
                    avatar:"/image/Friends/5.png",
                    mes:0
                },
                6:{
                    name:"Jessica",
                    status:true,
                    profession:"Designer",
                    typing:false,
                    avatar:"/image/Friends/6.png",
                    mes:0
                }
            },

            ernings_history:{
                N:[
                    {
                        name:"",
                        data: [99, 101, 303, 88, 102, 402, 105, 153, 108, 223],
                        color:"rgb(37,157,245)"
                    }
                ],
                categori:[" ", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", " "]

            },
            stats:{
                new_orders:{
                    n:3594,
                    up:true,
                    in:13
                },
                totals_sales:{
                    n:105990,
                    up:true,
                    in:4
                },
                total_paid_out:{
                    n:50890,
                    up:false,
                    in:21
                },
                new_customers:{
                    n:453,
                    up:false,
                    in:5
                }
            },
            Referrer:{
                1:{
                    name:"note.com",
                    views:"54",
                    sales:"12",
                    coversion:"10.5",
                    total:"50"

                },
                2:{
                    name:"Direct, email, IM",
                    views:"96",
                    sales:"24",
                    coversion:"25",
                    total:"10"
                },
                3:{
                    name:"Recommended",
                    views:"5",
                    sales:"5",
                    coversion:"100",
                    total:"10"
                },
                4:{
                    name:"Dribbble",
                    views:"1",
                    sales:"0",
                    coversion:"0.0",
                    total:"0"
                },
                5:{
                    name:"google.co.uk",
                    views:"5",
                    sales:"0",
                    coversion:"0.0",
                    total:"0"
                },
                6:{
                    name:"google.com.tr",
                    views:"0",
                    sales:"0",
                    coversion:"0.0",
                    total:"0"
                },
                7:{
                    name:"mail.google.com",
                    views:"1",
                    sales:"0",
                    coversion:"0.0",
                    total:"0"
                },
                8:{
                    name:"facebook.com",
                    views:"5",
                    sales:"0",
                    coversion:"0.0",
                    total:"0"
                }
            }
        },
        4:{
            
            avatar:"/image/Users/u4.png",
            status:true,
            rang:"User",
            personal_info:{
                fname:"Nasty",
                sname:"Jackson",
                fs:"Nasty J.",
                profession:"Beta Tester | Ultimate User",
                email:"jordan.jackson@dashbord.com",
                mobile:"+44(0) 7887 665 588",
                skill_level:"Senior (50K+)",
                paid_out_limit:{
                    n:70,
                    m:120
                },
                bio:"Jordan graduated from Cornell University in 2004 with a Bachelor degree in computer science and a specialization in mathematics. While there, he published two articles on Code-project. ",
                skills:{
                    1:{
                      name:"PHOTOGRAPHY",
                      color:"rgb(4, 116, 200)"  
                    },
                    2:{
                      name:"TEACHER",
                      color:"rgb(69, 184, 84)"  
                    },
                    3:{
                      name:"TRAVELER",
                      color:"rgb(129, 145, 166)"  
                    },
                    4:{
                      name:"IOS",
                      color:"rgb(248, 107, 103)"   
                    },
                }
            },
            personal_event:{
                1:{
                    name:"Super Photography 2016",
                    data:"Junuary 13th, Vinna 6:30 PM",
                    skills:{
                        name:"PHOTOGRAPHY",
                        color:"rgb(4, 116, 200)"  
                    }
                },
                2:{
                    name:"Phot Expo",
                    data:"March 28th, Paris - 7:30 PM",
                    skills:{
                      name:"DESIGN",
                      color:"rgb(55, 172, 193)" 
                    }
                }
            },
            invite:4,
            search:"",
            friends:{
                1:{
                    name:"Carolina",
                    status:true,
                    profession:"Designer",
                    typing:false,
                    avatar:"/image/Friends/1.png",
                    mes:2,
                },
                2:{
                    name:"Clare",
                    status:true,
                    profession:"Designer",
                    typing:false,
                    avatar:"/image/Friends/2.png",
                    mes:0
                },
                3:{
                    name:"Lina",
                    status:false,
                    profession:"Sales Manager",
                    typing:false,
                    avatar:"/image/Friends/3.png",
                    mes:0
                },
                4:{
                    name:"Jason",
                    status:true,
                    profession:"CTO",
                    typing:false,
                    avatar:"/image/Friends/4.png",
                    mes:0
                },
                5:{
                    name:"Dash",
                    status:false,
                    profession:"Designer Lead",
                    typing:false,
                    avatar:"/image/Friends/5.png",
                    mes:0
                },
                6:{
                    name:"Jessica",
                    status:true,
                    profession:"Designer",
                    typing:false,
                    avatar:"/image/Friends/6.png",
                    mes:0
                }
            },

            ernings_history:{
                N:[
                    {
                        name:"",
                        data: [99, 101, 303, 88, 102, 402, 105, 153, 108, 223],
                        color:"rgb(37,157,245)"
                    }
                ],
                categori:[" ", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", " "]

            },
            stats:{
                new_orders:{
                    n:3594,
                    up:true,
                    in:13
                },
                totals_sales:{
                    n:105990,
                    up:true,
                    in:4
                },
                total_paid_out:{
                    n:50890,
                    up:false,
                    in:21
                },
                new_customers:{
                    n:453,
                    up:false,
                    in:5
                }
            },
            Referrer:{
                1:{
                    name:"note.com",
                    views:"54",
                    sales:"12",
                    coversion:"10.5",
                    total:"50"

                },
                2:{
                    name:"Direct, email, IM",
                    views:"96",
                    sales:"24",
                    coversion:"25",
                    total:"10"
                },
                3:{
                    name:"Recommended",
                    views:"5",
                    sales:"5",
                    coversion:"100",
                    total:"10"
                },
                4:{
                    name:"Dribbble",
                    views:"1",
                    sales:"0",
                    coversion:"0.0",
                    total:"0"
                },
                5:{
                    name:"google.co.uk",
                    views:"5",
                    sales:"0",
                    coversion:"0.0",
                    total:"0"
                },
                6:{
                    name:"google.com.tr",
                    views:"0",
                    sales:"0",
                    coversion:"0.0",
                    total:"0"
                },
                7:{
                    name:"mail.google.com",
                    views:"1",
                    sales:"0",
                    coversion:"0.0",
                    total:"0"
                },
                8:{
                    name:"facebook.com",
                    views:"5",
                    sales:"0",
                    coversion:"0.0",
                    total:"0"
                }
            }
        },
        5:{
            
            avatar:'/image/Users/u5.png',
            status:true,
            rang:"User",
            personal_info:{
                fname:"Nasty",
                sname:"Medvedeva",
                fs:"Nasty M.",
                profession:"Beta Tester | Ultimate User",
                email:"jordan.jackson@dashbord.com",
                mobile:"+44(0) 7887 665 588",
                skill_level:"Senior (50K+)",
                paid_out_limit:{
                    n:580,
                    m:2356
                },
                bio:"Jordan graduated from Cornell University in 2004 with a Bachelor degree in computer science and a specialization in mathematics. While there, he published two articles on Code-project. ",
                skills:{
                    1:{
                      name:"PHOTOGRAPHY",
                      color:"rgb(4, 116, 200)"  
                    },
                    2:{
                      name:"TEACHER",
                      color:"rgb(69, 184, 84)"  
                    },
                    3:{
                      name:"TRAVELER",
                      color:"rgb(129, 145, 166)"  
                    },
                    4:{
                      name:"IOS",
                      color:"rgb(248, 107, 103)"   
                    },
                }
            },
            personal_event:{
                1:{
                    name:"Super Photography 2016",
                    data:"Junuary 13th, Vinna 6:30 PM",
                    skills:{
                        name:"PHOTOGRAPHY",
                        color:"rgb(4, 116, 200)"  
                    }
                },
                2:{
                    name:"Phot Expo",
                    data:"March 28th, Paris - 7:30 PM",
                    skills:{
                      name:"DESIGN",
                      color:"rgb(55, 172, 193)" 
                    }
                }
            },
            invite:54,
            search:"",
            friends:{
                1:{
                    name:"Carolina",
                    status:true,
                    profession:"Designer",
                    typing:false,
                    avatar:"/image/Friends/1.png",
                    mes:2,
                },
                2:{
                    name:"Clare",
                    status:true,
                    profession:"Designer",
                    typing:false,
                    avatar:"/image/Friends/2.png",
                    mes:0
                },
                3:{
                    name:"Lina",
                    status:false,
                    profession:"Sales Manager",
                    typing:false,
                    avatar:"/image/Friends/3.png",
                    mes:0
                },
                4:{
                    name:"Jason",
                    status:true,
                    profession:"CTO",
                    typing:false,
                    avatar:"/image/Friends/4.png",
                    mes:0
                },
                5:{
                    name:"Dash",
                    status:false,
                    profession:"Designer Lead",
                    typing:false,
                    avatar:"/image/Friends/5.png",
                    mes:0
                },
                6:{
                    name:"Jessica",
                    status:true,
                    profession:"Designer",
                    typing:false,
                    avatar:"/image/Friends/6.png",
                    mes:0
                }
            },

            ernings_history:{
                N:[
                    {
                        name:"",
                        data: [99, 101, 303, 88, 102, 402, 105, 153, 108, 223],
                        color:"rgb(37,157,245)"
                    }
                ],
                categori:[" ", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", " "]
                
                

            },
            stats:{
                new_orders:{
                    n:3594,
                    up:true,
                    in:13
                },
                totals_sales:{
                    n:105990,
                    up:true,
                    in:4
                },
                total_paid_out:{
                    n:50890,
                    up:false,
                    in:21
                },
                new_customers:{
                    n:453,
                    up:false,
                    in:5
                }
            },
            Referrer:{
                1:{
                    name:"note.com",
                    views:"51",
                    sales:"12",
                    coversion:"10.5",
                    total:"50"

                },
                2:{
                    name:"Direct, email, IM",
                    views:"96",
                    sales:"24",
                    coversion:"25",
                    total:"10"
                },
                3:{
                    name:"Recommended",
                    views:"5",
                    sales:"5",
                    coversion:"100",
                    total:"10"
                },
                4:{
                    name:"Dribbble",
                    views:"1",
                    sales:"0",
                    coversion:"0.0",
                    total:"0"
                },
                5:{
                    name:"google.co.uk",
                    views:"5",
                    sales:"0",
                    coversion:"0.0",
                    total:"0"
                },
                6:{
                    name:"google.com.tr",
                    views:"0",
                    sales:"0",
                    coversion:"0.0",
                    total:"0"
                },
                7:{
                    name:"mail.google.com",
                    views:"1",
                    sales:"0",
                    coversion:"0.0",
                    total:"0"
                },
                8:{
                    name:"facebook.com",
                    views:"5",
                    sales:"0",
                    coversion:"0.0",
                    total:"0"
                }
            }
        },
       
        
    }
}
 
export default initialState;