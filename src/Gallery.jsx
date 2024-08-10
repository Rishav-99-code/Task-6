import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

const images =[
    {src:"/1.png", alt:"Uncharted 4: A Thief's End"},
    {src:"/2.png", alt:"Uncharted 4: A Thief's End"},
    {src:"/3.png", alt:"GTA V"},
    {src:"/4.png", alt:"Horizon Zero Dawn"},
    {src:"/5.png", alt:"Watch Dogs 2"},
    {src:"/6.png", alt:"Watch Dogs 2"},
    {src:"/7.png", alt:"Assassin's creed Origins"},
    {src:"/8.png", alt:"Call of duty modern warfare 2"},
    {src:"/9.png", alt:"Call of duty modern warfare 2"},
    {src:"/10.png", alt:"Far Cry 6"},
    {src:"/11.png", alt:"Far Cry 6"},
    {src:"/12.png", alt:"GTA V"},
    {src:"/13.png", alt:"Spiderman"},
    {src:"/14.png", alt:"Spiderman"},
    {src:"/15.png", alt:"Spiderman"},
    {src:"/16.png", alt:"Red dead redemption 2"},
    {src:"/17.png", alt:"Elden Ring"},
    {src:"/18.png", alt:"Elden Ring"},
    {src:"/19.png", alt:"Elden Ring"},
]

export function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >
                {images.map((image,index)=>{
                    return (
                        <a href={image.src} key={index}>
                        <img alt={image.alt} src={image.src} />
                    </a>
                    )
                }
                )}
             
            </LightGallery>
        </div>
    );
}
