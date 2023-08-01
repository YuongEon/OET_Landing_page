import {
  banner1,
  banner2,
  banner3,
  downloadIcon,
  thumbnail1,
  thumbnail2,
  thumbnail3,
} from "../../../../assets/images";

const carouselData = [
  {
    image: banner1,
    carousel_title: (
      <>
        <h2>Building For</h2>
        <h2>
          <span>Green</span> Energy
        </h2>
      </>
    ),
    carousel_sub: (
      <>
        <p className="text-white">
          We provide types of services for Wind Farm projects in Vietnam. With{" "}
          <span>153+ MW of Wind</span> turbines installed since established, we
          are confident to provide the best services to our customer.
        </p>
      </>
    ),
    thumb_content: (
      <>
        <h2>15</h2>
        <p>EXPERIENCE</p>
      </>
    ),
    thumbnail: thumbnail1,
    width: 20,
  },
  {
    image: banner2,
    carousel_title: (
      <>
        <h2>Victory</h2>
        <h2>
          <span>Park</span>
        </h2>
      </>
    ),
    carousel_sub: (
      <>
        <p className="text-white">
          We provide types of services for Wind Farm projects in Vietnam. With{" "}
          <span>153+ MW of Wind</span> turbines installed since established, we
          are confident to provide the best services to our customer.
        </p>
      </>
    ),
    thumb_content: (
      <>
        <h2>50</h2>
        <p>CUSTOMERS</p>
      </>
    ),
    thumbnail: thumbnail2,
    width: 50,
  },
  {
    image: banner3,
    carousel_title: (
      <>
        <h2>Site</h2>
        <h2>
          <span>Condition</span>
        </h2>
      </>
    ),
    carousel_sub: (
      <>
        <p className="text-white">
          We provide types of services for Wind Farm projects in Vietnam. With{" "}
          <span>153+ MW of Wind</span> turbines installed since established, we
          are confident to provide the best services to our customer.
        </p>
      </>
    ),
    thumb_content: (
      <>
        <div>
          <img src={downloadIcon} alt="My SVG" />
        </div>
        <p>DOWNLOAD PROFILE</p>
      </>
    ),
    thumbnail: thumbnail3,
    width: 100,
  },
];

export default carouselData;
