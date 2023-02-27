import React from 'react'
import ReactDom from 'react-dom'
import './Modal.css'
import { GetSinglePhoto } from './UnsplashApi'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import InstagramIcon from '@mui/icons-material/Instagram';
import TagsContainer from './TagsContainer';



function Modal(props) {

    const dataPhoto = GetSinglePhoto(props.id);


    return ReactDom.createPortal(
        <>
            <div className='Overlay_Styles'></div>
            <div className='Modal_Styles'>
                <button
                    className='crossButton'
                    onClick={props.onclick}>
                    <CloseOutlinedIcon />
                </button>

                <Card className='ModalCard' sx={{ maxWidth: 600 }}>
                    <CardActionArea>
                        <CardMedia
                        style={{
                            maxWidth: '100%',
                            objectFit:'contain'
                     
                        }}
                            component="img"
                            height="410"
                            image={dataPhoto.urls?.regular}
                            alt=""
                        />
                        <CardContent>
                            <Typography className='lowerDiv' gutterBottom variant="h5" component="div">
                                <div className='headerDiv'>
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{  }} aria-label="">
                                                <img src={dataPhoto.user?.profile_image.large} alt='profile'></img>
                                            </Avatar>
                                        }

                                        title={dataPhoto.user?.first_name}
                                        subheader={`@${dataPhoto.user?.username}`}
                                    /> 
                                </div>
                                <div className='likesContainer'>
                                    <InstagramIcon/>
                                    <span className='likesNum'>{`@${dataPhoto.user?.instagram_username}`}</span>
                                    </div>
                             <div className='likesContainer'>
                             <span className='likesNum'>
                                <span className='bold'>Views:  </span>
                                {dataPhoto.views}
                               
                             </span>
                             < ThumbUpOutlinedIcon />
                            
                                <span className='likesNum'>
                                    {dataPhoto.likes}
                                </span>
                             </div>
                            </Typography>
                            <Typography className='' gutterBottom variant="h5" component="div">
                            <span className='tagsHeading'>Relevant Tags</span>
                                <div className='tagsContainer'>
                                    
                                    {
                                        dataPhoto.tags?.map((tag)=>(
                                            <TagsContainer tagName={tag.title}/>
                                        ))
                                    }
                                </div>
                               
                            </Typography>

                        </CardContent>
                    </CardActionArea>

                </Card>

            </div>
        </>,
        document.getElementById('portal')

    )
}

export default Modal