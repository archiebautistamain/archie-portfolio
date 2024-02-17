import api from './img/api.png';
import bootstrap from './img/bootstrap.png';
import cplusplus from './img/cplusplus.png';
import csharp from './img/csharp.png';
import css3 from './img/css3.png';
import html5 from './img/html5.png';
import javascript from './img/javascript.png';
import jquery from './img/jquery.png';
import json from './img/json.png';
import mysql from './img/mysql.png';
import php from './img/php.png';
import python from './img/python.png';
import react from './img/react.png';
import tailwind from './img/tailwind.png';
import vb from './img/vb.png';


const skillClass = "bg-slate-900 flex justify-center align-middle p-1 rounded transition duration-300 ease-in-out hover:bg-slate-400"

const Skills = () => {
    
  return (
    <>
        <div className='grid grid-rows-1 align-middle justify-center'>
            <div className='flex justify-center align-middle w-full pt-3 lg:my-36 md:my-16 min-[320px]:mb-12 '>
                <h2 className='text-3xl'>Skills</h2>
            </div>
            <div className="grid grid-rows-3 grid-flow-col gap-2 md:w-full min-[320px]:w-52">
                <div className={skillClass}>
                    <img src={api} alt="api" height="50" width="50" />
                </div>
                <div className={skillClass}>
                    <img src={bootstrap} alt="api" height="50" width="50" />
                </div>
                <div className={skillClass}>
                    <img src={cplusplus} alt="api" height="50" width="50"/>
                </div>
                <div className={skillClass}>
                    <img src={csharp} alt="api" height="50" width="50"/>
                </div>
                <div className={skillClass}>
                    <img src={css3} alt="api" height="50" width="50"/>
                </div>
                <div className={skillClass}>
                    <img src={html5} alt="api" height="50" width="50"/>
                </div>
                <div className={skillClass}>
                    <img src={javascript} alt="api" height="50" width="50"/>
                </div>
                <div className={skillClass}>
                    <img src={jquery} alt="api" height="50" width="50"/>
                </div>
                <div className={skillClass}>
                    <img src={json} alt="api" height="50" width="50"/>
                </div>
                <div className={skillClass}>
                    <img src={mysql} alt="api" height="50" width="50"/>
                </div>
                <div className={skillClass}>
                    <img src={php} alt="api" height="50" width="50"/>
                </div>
                <div className={skillClass}>
                    <img src={python} alt="api" height="50" width="50"/>
                </div>
                <div className={skillClass}>
                    <img src={react} alt="api" height="50" width="50"/>
                </div>
                <div className={skillClass}>
                    <img src={tailwind} alt="api" height="50" width="50"/>
                </div>
                <div className={skillClass}>
                    <img src={vb} alt="api" height="50" width="50"/>
                </div>
            </div>
        </div>
        
    </>
    
  )
}

export default Skills