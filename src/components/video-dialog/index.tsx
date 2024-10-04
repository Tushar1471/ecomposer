import { Dialog } from 'primereact/dialog';
import videoPlayer from "../../assets/backdropVideo.mp4";

interface props {
    visibleBox: boolean;
    setVisibleBox: React.Dispatch<React.SetStateAction<boolean>>
}

const VideoDialog: React.FC<props> = ({ visibleBox, setVisibleBox }) => {

    return (
        <div className="card flex justify-content-center z-50">
            <Dialog className='lg:h-[90%] bg-green-400' header="Header" visible={visibleBox} style={{ width: '90%' }} onHide={() => { if (!visibleBox) return; setVisibleBox(false); }}>
                <div>
                    <video width={"600"} className='lg:w-[80%] rounded-3xl mx-auto' autoPlay loop>
                        <source src={videoPlayer} />
                        Your Browser does not support the video tag.
                    </video>
                </div>
            </Dialog>
        </div>
    )
}

export default VideoDialog;