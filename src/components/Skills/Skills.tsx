
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1000,
        autoplay:true,
        mobileFirst:true,
        position: "static",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
                arrows: false,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                arrows: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              }
            }
          ],
    }
  return (
    <>
    <div className="w-full">
        <div className='flex xl:my-12 max-xl:my-12 max-lg:ms-5 w-full max-lg:my-12 max-md:my-6 max-md:ms-3 max-sm:my-1 '>
            <h2 className='xl:text-5xl max-xl:text-5xl max-lg:text-5xl max-md:text-3xl max-sm:text-xl'>Skills</h2>
        </div>
        <div className='flex max-lg:ms-5 max-lg:mt-12 max-lg:mb-6 max-md:ms-3 max-md:mt-6 max-md:mb-2 '>
            <h2 className='lg:text-xl max-md:text-lg max-sm:text-base text-slate-500'>Proficient</h2>
        </div>
        <div className="min-h-0 min-w-0">
            <div className='px-16 w-auto'>
            <Slider {...settings}>
                {imagesSkill.map((img, index) => (
                    <div key={index} className="py-0 my-0 !flex justify-center" >
                        <img height="50" width="50"  src={img.image} alt={img.name} />
                    </div>
                ))}
            </Slider>
            </div>
        </div>
        <div className='flex max-lg:ms-5 max-lg:mt-6 max-lg:mb-6 lg:mb-6 max-md:ms-3 max-md:mt-6 max-md:mb-2 '>
            <h2 className='max-lg:text-xl lg:text-xl max-md:text-lg max-sm:text-base text-slate-500'>Experienced</h2>
        </div>
        <div className="min-h-0 min-w-0">
            <div className='px-16 w-auto'>
            <Slider {...settings}>
                {imagesSkill.map((img, index) => (
                    <div key={index} className="py-0 my-0 !flex justify-center" >
                        <img height="50" width="50"  src={img.image} alt={img.name} />
                    </div>
                ))}
            </Slider>
            </div>
        </div>
        <div className='flex max-lg:ms-5 max-lg:mt-6 max-lg:mb-6 lg:mb-6 max-md:ms-3 max-md:mt-6 max-md:mb-2 '>
            <h2 className='max-lg:text-xl lg:text-xl max-md:text-lg max-sm:text-base text-slate-500'>Learning</h2>
        </div>
        <div className="min-h-0 min-w-0">
            <div className='px-16 w-auto'>
            <Slider {...settings}>
                {imagesSkill.map((img, index) => (
                    <div key={index} className="py-0 my-0 !flex justify-center" >
                        <img height="50" width="50"  src={img.image} alt={img.name} />
                    </div>
                ))}
            </Slider>
            </div>
        </div>
    </div>
        
        
        
        
    </>
    
  )
}

const imagesSkill = [
    {
        name: 'HTML5',
        image: '/Skills/img/html5.png'
    },
    {
        name: 'CSS3',
        image: '/Skills/img/css3.png'
    },
    {
        name: 'JavaScript',
        image: '/Skills/img/javascript.png'
    },
    {
        name: 'PHP',
        image: '/Skills/img/php.png'
    },
    {
        name: 'JQuery',
        image: '/Skills/img/jquery.png'
    },
    {
        name: 'MySQL',
        image: '/Skills/img/mysql.png'
    },
    {
        name: 'html5',
        image: '/Skills/img/html5.png'
    },
    {
        name: 'JSON',
        image: '/Skills/img/json.png'
    },
    {
        name: 'Adobe Photoshop',
        image: '/Skills/img/photoshop.png'
    },
    {
        name: 'Bootstrap',
        image: '/Skills/img/bootstrap.png'
    },
    {
        name: 'Tailwind',
        image: '/Skills/img/tailwind.png'
    },
]

export default Skills