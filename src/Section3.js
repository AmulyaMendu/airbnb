import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Section3() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
      slidesToScroll: 3,
        draggable: true,
        arrow:true

    }
    const data=[
        {
            img:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-5122832-media_library/original/c389daab-d4d7-43ef-bad3-9cdd3a6ce4ac.jpg?im_w=1440"
            ,
            rating:"5.0(3).japan",
            description:"Make original itinerary in kyoto with Akari",
            price:"From $3,833/person"
        },{
            img:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-2496585-active_media/original/71f6c8fe-048e-4d71-b89e-bc083245b653.jpeg?im_w=320",
            rating:"170.0(3).china",
            description:"Make original itinerary in kyoto with Akari",
            price:"From $12,833/person"
        },{
            img:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-2488061-active_media/original/f8647ede-fccf-449e-96fe-024f7973b86d.jpg?im_w=320",
            rating:"60.0(3).italiy",
            description:"Make original itinerary in kyoto with Akari",
            price:"From $0,833/person"
        },{
            img:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-2493134-active_media/original/90ff3c19-817e-48a5-be2e-2316a55852dd.jpeg?im_w=320",
            rating:"57.0(3).asia",
            description:"Make original itinerary in kyoto with Akari",
            price:"From $8,233/person"
        },{
            img:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-2596268-active_media/original/7c87c5f0-28ab-47fb-84bd-4805bf8680a6.jpeg?im_w=320",
            rating:"95.0(3).bhutan",
            description:"Make original itinerary in kyoto with Akari",
            price:"From $1,500/person"
        },{
            img:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-3033220-media_library/original/eb40951a-ab06-429a-bb75-9410d14efdff.jpeg?im_w=320",
            rating:"54.0(3).america",
            description:"Make original itinerary in kyoto with Akari",
            price:"From $14,833/person"
        },{
            img:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-5121505-media_library/original/ad81cdd5-4934-4ac5-9789-a1711cb81523.jpeg?im_w=320",
            rating:"20.0(3).india",
            description:"Make original itinerary in kyoto with Akari",
            price:"From $3143/person"
        },{
            img:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-3076506-active_media/original/e44350e5-744f-4e80-a457-296e30ed29d5.jpg?im_w=320",
            rating:"5.0(3).australia",
            description:"Make original itinerary in kyoto with Akari",
            price:"From $6000/person"
        }
    ]
  return (
    <div style={{marginLeft:"20px"}}>
        <div>
        <h3>Plan a trip with help from local Hosts around the world</h3>

            </div>
        <div >
        <p style={{marginLeft:"88%",marginTop:"-30px"}}>show({data.length})</p>

            </div>
        <div style={{ marginTop:"-10px", width: "95%", height: "50px",gap:"10px" }}>

        <Slider {...settings}>
        {
            data.map((d)=>(

       
        <Card sx={{ maxWidth: 300,display:"flex",width:"300px",marginLeft:"20px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          width="400"
          alt="green iguana"
       image= {d.img}
        />
        <CardContent>
        <Box style={{display:"flex"}} >

                        <IconButton color="black"  style={{marginLeft:"-25px",marginTop:"-28px"}}>
                            <StarIcon sx={{
                                height: 20,
                                width: 15,
                                maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 350, md: 250 }, color: "black"
                            }} />
                        </IconButton>
                         <Typography gutterBottom variant="h6" component="div" style={{marginTop:"-18px"}}>
          {d.rating}
          </Typography> 
                        </Box>
        
        
          <Typography variant="body2" color="text.secondary" style={{marginLeft:"-12px"}}>
           {d.description}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{marginLeft:"-12px"}}>
           {d.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
         ))
        }
        </Slider>
           </div>
    </div>
  )
}
