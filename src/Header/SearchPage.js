import React from 'react';
import TuneOutlinedIcon from '@material-ui/icons/Tune';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
            image="https://yt3.ggpht.com/ytc/AAUvwniXCf6djdLQHMg20p7J0lJn0KY556ucI0pdV1LAEBw=s88-c-k-c0x00ffffff-no-rj"
            channel="Sanjeev Vinodh "
            verified
            subs="11.4k"
            noOfVideos={50}
            description="Magician, dancer, and Berkeley student."
            />
            <hr/>

            <VideoRow
            views="2.2M"
            subs="11.4K"
            description="https://www.sanjeevvinodh.com/ 19-year-old Sanjeev Vinodh becomes the youngest magician (and first Indian) to fool Penn"
            timestamp="2 weeks ago"
            channel="Sanjeev Vinodh"
            title="The YOUNGEST Fooler Yet!!!Sanjeev Vinodh on Penn and Teller Fool Us"
            image="https://img.youtube.com/vi/72wV2tYjUHk/maxresdefault.jpg"
            />

            <VideoRow
            views="17K"
            subs="4.14M"
            description="👍 Goals that science can't explain"
            timestamp="1 years ago"
            channel="SportsHD"
            title="Goals that science can't explain"
            image="https://img.youtube.com/vi/BX3N0fA5aC0/maxresdefault.jpg"
            />

            <VideoRow
            views="30M"
            subs="23.6M"
            description="The Lion King is now streaming only on Disney+.

            Disney+ is the ultimate streaming destination for entertainment from Disney, Pixar, Marvel, Star Wars, and National Geographic. "
            timestamp="10 months ago"
            channel="DisneyMusicVEVO"
            title="Hakuna Matata (From The Lion King)"
            image="https://img.youtube.com/vi/0MxulhivCvI/maxresdefault.jpg"
            />

            <VideoRow
            views="254M"
            subs="3.9M"
            description="The short three-minute fragment from series is a 1950 American one-reel animated cartoon and is the 47th Tom and Jerry short directed by William Hanna and Joseph Barbera and produced by Fred Quimby."
            timestamp="5 years ago"
            channel="Jonni Valentayn"
            title="Tom and Jerry, 47 Episode - Little Quacker (1950)"
            image="https://img.youtube.com/vi/aPwidLhCvMg/maxresdefault.jpg"
            />

            <VideoRow
            views="60M"
            subs="1.23M"
            description="The Beast battles The Phenom in a highly personal showdown at The Biggest Event of The Summer, courtesy of WWE Network."
            timestamp="1 years ago"
            channel="WWE"
            title="FULL MATCH - Brock Lesnar vs. The Undertaker: SummerSlam 2015"
            image="https://img.youtube.com/vi/sBBFSuHATmw/maxresdefault.jpg"
            />

            <VideoRow
            views="4.8M"
            subs="14.8M"
            description="Have you witnessed something like this? 👀 #FailArmy​. Enjoy our caught on security camera compilation. Which one is your favorite? "
            timestamp="2 weeks ago"
            channel="FailArmy"
            title="CAUGHT ON CAM | Security Cameras Compilation 2021"
            image="https://img.youtube.com/vi/bD5-sHcjyts/maxresdefault.jpg"
            />
        </div>
    )
}

export default SearchPage