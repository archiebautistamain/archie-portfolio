
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 8000,
        autoplaySpeed: 0,
        pauseOnHover: false,
        autoplay:true,
        mobileFirst:true,
        position: "static",
        variableWidth: true,
        cssEase: 'linear',
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
        <div className='flex-col xl:my-12 max-xl:my-12 w-full max-lg:my-12 max-md:my-6 max-sm:my-1 max-sm:mt-12'>
            <div className="w-100">
                <h2 className='xl:text-5xl max-xl:text-5xl max-lg:text-5xl max-md:text-3xl max-sm:text-xl w-full'>Skills</h2>
            </div>
            <div className="w-100 pt-3">
                <p className="font-thin xl:text-lg max-xl:text-lg maxlg:text-base max-md:text-sm max-sm:text-xs">web development essentials—front and backend technologies, collaboration tools, and innovative practices—crafted to deliver impactful solutions. Explore each logo to uncover how I apply these skills to drive excellence in every project.</p>
            </div>
            
        </div>
        <div className='flex mt-2'>
            <h2 className='xl:text-lg lg:text-lg max-md:text-base max-sm:text-sm text-slate-500'>Proficient</h2>
        </div>
        <div className="min-h-0 min-w-0">
            <div className='px-5 w-auto'>
            <Slider {...settings}>
                {imagesSkill.map((img, index) => (
                    <div key={index} className="py-0 my-0 mx-1 !flex justify-center" >
                        <img className="lg:w-12 lg:h-12 max-md:h-10 max-md:w-10 max-sm:h-7 max-sm:w-7"  src={img.image} alt={img.name} />
                    </div>
                ))}
            </Slider>
            </div>
        </div>
        <div className='flex'>
            <h2 className='xl:text-lg lg:text-lg max-md:text-base max-sm:text-sm text-slate-500'>Experienced</h2>
        </div>
        <div className="min-h-0 min-w-0">
            <div className='px-5 w-auto'>
            <Slider {...settings}>
                {imagesExp.map((img, index) => (
                    <div key={index} className="py-0 my-0 mx-1 !flex justify-center" >
                        <img className="lg:w-12 lg:h-12 max-md:h-10 max-md:w-10 max-sm:h-7 max-sm:w-7" src={img.image} alt={img.name} />
                    </div>
                ))}
            </Slider>
            </div>
        </div>
        <div className='flex'>
            <h2 className='xl:text-lg lg:text-lg max-md:text-base max-sm:text-sm text-slate-500'>Learning</h2>
        </div>
        <div className="min-h-0 min-w-0">
            <div className='px-5 w-auto'>
            <Slider {...settings}>
                {imagesLearn.map((img, index) => (
                    <div key={index} className="py-0 my-0 mx-1 !flex justify-center" >
                        <img className="lg:w-12 lg:h-12 max-md:h-10 max-md:w-10 max-sm:h-7 max-sm:w-7"  src={img.image} alt={img.name} />
                    </div>
                ))}
            </Slider>
            </div>
        </div>
    </div>
        
        
        
        
    </>
    
  )
}

const imagesExp = [
    {
        name: 'API',
        image: '/Skills/img/api.png'
    },
    {
        name: 'Blender',
        image: '/Skills/img/blender.png'
    },
    {
        name: 'Cplusplus',
        image: '/Skills/img/cplusplus.png'
    },
    {
        name: 'Csharp',
        image: '/Skills/img/csharp.png'
    },
    {
        name: 'Figma',
        image: '/Skills/img/figma.png'
    },
    {
        name: 'Github',
        image: '/Skills/img/github.png'
    },
    {
        name: 'photoshop',
        image: '/Skills/img/photoshop.png'
    },
    {
        name: 'Java',
        image: '/Skills/img/java.png'
    },
    {
        name: 'ReactJs',
        image: '/Skills/img/reactjs.png'
    },
    {
        name: 'Next',
        image: '/Skills/img/nextjs.png'
    },
    {
        name: 'Illustrator',
        image: '/Skills/img/illustrator.png'
    },
    {
        name: 'Firebase',
        image: '/Skills/img/firebase.png'
    },
    {
        name: 'Restapi',
        image: '/Skills/img/restapi.png'
    },
    {
        name: 'Unity',
        image: '/Skills/img/unity.png'
    },
    {
        name: 'vb',
        image: '/Skills/img/vb.png'
    },
]

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

const imagesLearn = [
    {
        name: 'Nextjs',
        image: '/Skills/img/nextjs.png'
    },
    {
        name: 'Laravel',
        image: '/Skills/img/laravel.png'
    },
    {
        name: 'Angular',
        image: '/Skills/img/angular.png'
    },
    {
        name: 'MongoDb',
        image: '/Skills/img/mongodb.png'
    },
    {
        name: 'RestApi',
        image: '/Skills/img/restapi.png'
    },
    {
        name: 'TypeScript',
        image: '/Skills/img/typescript.png'
    },
    {
        name: 'Figma',
        image: '/Skills/img/figma.png'
    },
    {
        name: 'Github',
        image: '/Skills/img/github.png'
    },
    {
        name: 'API',
        image: '/Skills/img/api.png'
    },
    {
        name: 'Firebase',
        image: '/Skills/img/firebase.png'
    },
    {
        name: 'Illustrator',
        image: '/Skills/img/illustrator.png'
    },
]


export default Skills