import React from "react";
import "./recommendenvideos.css";

import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2> Recommended </h2>{" "}
      <div className="recommendedVideos-video">
        <VideoCard
          title="How to Become a Web Developer"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://www.filepicker.io/api/file/q8yh1SmySmy5BNapeDem"
          channel="Clever Programmer"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOpi7pMTdSEtkJGDB-vGeuUFj-y8wSxsrPsg&usqp=CAU"
        />

        <VideoCard
          title="How to Become a React Developer"
          views="1.3M Views"
          timestamp="3 days ago"
          channelImage="https://yt3.ggpht.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s900-c-k-c0x00ffffff-no-rj"
          channel="Sanny Sanga"
          image="https://reactjs.org/logo-og.png"
        />

        <VideoCard
          title="Dil Diya Gallan"
          views="1B Views"
          timestamp="3 years ago"
          channelImage="https://static.toiimg.com/photo/msid-70583771/70583771.jpg?67590"
          channel="YRF"
          image="https://i.ytimg.com/vi/nqUbSvFS1e4/maxresdefault.jpg"
        />

        <VideoCard
          title="Khuda Aur Mohabbat"
          views="60.3M Views"
          timestamp="6 months ago"
          channelImage="https://yt3.ggpht.com/qsuzLDGZ9P2lVK2RCmzYo78zWO8PtoaevySKQmQEnv874EXyq8CtwPn64n2T3grp6KXJSnOt=s900-c-k-c0x00ffffff-no-rj"
          channel="Har Pal Geo"
          image="https://jang.com.pk/assets/uploads/updates/2021-08-08/5370_6331076_1_updates.jpg"
        />
        <VideoCard
          title="How to Become a Web Developer"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-1/p320x320/241013356_3124608901104938_4841102880698831209_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Uqev8YdNKzYAX-OWHD1&_nc_ht=scontent-del1-1.xx&oh=ac943ad4140b54cfa18a334021d09472&oe=617AC101"
          channel="Clever Programmer"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOpi7pMTdSEtkJGDB-vGeuUFj-y8wSxsrPsg&usqp=CAU"
        />
        <VideoCard
          title="Asal mein"
          views="1.3M Views"
          timestamp="6 months ago"
          channelImage="https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(jpg)/http://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/6133c4719fa0c244a1efb3fa/COLLECTION_96730915120729.png"
          channel="Darshan Raval"
          image="https://i1.sndcdn.com/artworks-8ksmya2gqEeS5Zsd-uTHczw-t500x500.jpg"
        />
        <VideoCard
          title="Best of Farhan Saeeda"
          views="10.3M Views"
          timestamp="2 year ago"
          channelImage="https://i.dawn.com/large/2017/04/590047e1591fb.jpg"
          channel="Farhan Saeed"
          image="https://en.dailypakistan.com.pk/uploads/digital_news/2017-08-04/1407598810-1572331555-64948802.jpg"
        />

        <VideoCard
          title="Best of Arigit Singh"
          views=".3M Views"
          timestamp="3 year ago"
          channelImage="https://i.ytimg.com/vi/HPkydJOXXNs/maxresdefault.jpg"
          channel=" Arijit Singh"
          image="https://i.ytimg.com/vi/HPkydJOXXNs/maxresdefault.jpg"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
