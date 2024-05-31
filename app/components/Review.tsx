'use client'

import React from 'react'
import { GoStarFill } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import { useSectionInView } from '../libs/hook';
import { motion } from "framer-motion";



function Review() {
  const { ref } = useSectionInView("Reviews", 0.25);

  return (
    <section ref={ref} id="reviews" className="w-full">
      <motion.div className="bg-red-500 py-16 px-10"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-white text-center font-bold pb-10 text-5xl">
          People Who Work With Us Say
        </h2>

        <div className="
        flex 
        justify-center 
        flex-col 
        items-center 
        gap-10
        lg:flex-row 
        lg:items-start
        lg:gap-10"
        >
          <div className="bg-white py-10 px-10 sm:w-[500px]  rounded-lg hover:-translate-x-1 hover:-translate-y-1 transition cursor-pointer">
            <div>
              <span className="flex text-yellow-300 justify-center text-xl pb-2 gap-2">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
              </span>
              <p className="text-neutral-700 pb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                ea sapiente libero in neque ab possimus doloremque harum eaque
                maxime eveniet, voluptas est. Ullam blanditiis voluptatem in eos
                voluptatum asperiores. Atque eum cumque, amet mollitia, et quam,
                dignissimos dolorum fugiat similique ipsum explicabo molestiae.
                Molestias deserunt obcaecati accusantium doloribus aspernatur
                eius perspiciatis vitae architecto molestiae cupiditate.
                Obcaecati consequuntur quaerat error! Ducimus, quasi similique!
                Incidunt, ut et temporibus eligendi assumenda eaque? Iure, rem?
                Aliquid, aperiam nihil dignissimos in dolores repudiandae est
                earum eos. Architecto dolorem, soluta nobis nihil sint accusamus
                iusto.
              </p>
              <span className="flex flex-col items-center">
                <p className="font-bold">Bill Gates</p>
                <p className="font-bold py-1">
                  Founder, Co-Contributor of Bdrive
                </p>
                <FaUserCircle className="text-5xl" />
              </span>
            </div>
          </div>

          <div className="bg-white py-10 px-10 sm:w-[500px] rounded-lg hover:-translate-x-1 hover:-translate-y-1 transition cursor-pointer">
            <div>
              <span className="flex text-yellow-300 justify-center text-xl pb-2 gap-2">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                ea sapiente libero in neque ab possimus doloremque harum eaque
                maxime eveniet, voluptas est. Ullam blanditiis voluptatem in eos
                voluptatum asperiores. Atque eum cumque, amet mollitia, et quam,
                dignissimos dolorum fugiat similique ipsum explicabo molestiae.
                Molestias deserunt obcaecati accusantium doloribus aspernatur
                eius perspiciatis vitae architecto molestiae cupiditate.
                Obcaecati consequuntur quaerat error! Ducimus, quasi similique!
                Incidunt, ut et temporibus eligendi assumenda eaque? Iure, rem?
                Aliquid, aperiam nihil dignissimos in dolores repudiandae est
                earum eos. Architecto dolorem, soluta nobis nihil sint accusamus
                iusto.
              </p>
              <span className="flex flex-col items-center">
                <p className="font-bold">Bill Gates</p>
                <p className="font-bold py-1">
                  Founder, Co-Contributor of Bdrive
                </p>
                <FaUserCircle className="text-5xl" />
              </span>
            </div>
          </div>

          <div className="bg-white py-10 px-10 sm:w-[500px] rounded-lg hover:-translate-x-1 hover:-translate-y-1 transition cursor-pointer">
            <div>
              <span className="flex text-yellow-300 justify-center text-xl pb-2 gap-2">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                ea sapiente libero in neque ab possimus doloremque harum eaque
                maxime eveniet, voluptas est. Ullam blanditiis voluptatem in eos
                voluptatum asperiores. Atque eum cumque, amet mollitia, et quam,
                dignissimos dolorum fugiat similique ipsum explicabo molestiae.
                Molestias deserunt obcaecati accusantium doloribus aspernatur
                eius perspiciatis vitae architecto molestiae cupiditate.
                Obcaecati consequuntur quaerat error! Ducimus, quasi similique!
                Incidunt, ut et temporibus eligendi assumenda eaque? Iure, rem?
                Aliquid, aperiam nihil dignissimos in dolores repudiandae est
                earum eos. Architecto dolorem, soluta nobis nihil sint accusamus
                iusto.
              </p>
              <span className="flex flex-col items-center">
                <p className="font-bold">Bill Gates</p>
                <p className="font-bold py-1">
                  Founder, Co-Contributor of Bdrive
                </p>
                <FaUserCircle className="text-5xl" />
              </span>
            </div>
          </div>

          <div className="bg-white py-10 px-10 sm:w-[500px] rounded-lg hover:-translate-x-1 hover:-translate-y-1 transition cursor-pointer hidden xl:block">
            <div>
              <span className="flex text-yellow-300 justify-center text-xl pb-2 gap-2">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                ea sapiente libero in neque ab possimus doloremque harum eaque
                maxime eveniet, voluptas est. Ullam blanditiis voluptatem in eos
                voluptatum asperiores. Atque eum cumque, amet mollitia, et quam,
                dignissimos dolorum fugiat similique ipsum explicabo molestiae.
                Molestias deserunt obcaecati accusantium doloribus aspernatur
                eius perspiciatis vitae architecto molestiae cupiditate.
                Obcaecati consequuntur quaerat error! Ducimus, quasi similique!
                Incidunt, ut et temporibus eligendi assumenda eaque? Iure, rem?
                Aliquid, aperiam nihil dignissimos in dolores repudiandae est
                earum eos. Architecto dolorem, soluta nobis nihil sint accusamus
                iusto.
              </p>
              <span className="flex flex-col items-center">
                <p className="font-bold">Bill Gates</p>
                <p className="font-bold py-1">
                  Founder, Co-Contributor of Bdrive
                </p>
                <FaUserCircle className="text-5xl" />
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Review