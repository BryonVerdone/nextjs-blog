import React from 'react';
import Layout from '../components/layout';
import Button from '../components/Button/Button';
import Image from 'next/image';
const AboutMe = () => {
  return (
    <>
      <Layout>
        <section className='flex flex-col items-center'>
          <div className='mb-8 mockup-window border bg-base-300'>
            <div className='flex justify-center px-4 py-16 bg-base-200 glass'>
              <p>
                Passionate web developer with experience in front-end
                development seeking to use proven skills from the educational
                and medical fields to continue to develop in the IT setting.
                I've developed strong interpersonal and problem solving skills
                invaluable to any team after a decade of building relationships
                with a diverse collection of people. When I'm not coding you can
                find me performing with my{' '}
                <a
                  href='http://thepossmband.com/'
                  target='_blank'
                  className='link-hover text-secondary cursor-pointer'
                >
                  band
                </a>
              </p>
            </div>
          </div>

          <Image
            className='rounded border-2 border-info '
            src='/images/POSSMatHTFDMAR22-136.jpg'
            height={200}
            width={500}
          />
        </section>
      </Layout>
    </>
  );
};

export default AboutMe;
