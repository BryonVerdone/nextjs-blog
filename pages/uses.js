import React from 'react';
import Layout from '../components/layout';
const Uses = () => {
  return (
    <Layout>
      <h2>Uses</h2>
      <section>
        <article>
          <h3 className='mb-2'>Development Environment </h3>
          <p>
            I primarily code on Windows using WSL on my{' '}
            <a
              target='_blank'
              className='text-secondary'
              href='https://pcpartpicker.com/user/bverdone/saved/#view=HgwF8d'
            >
              custom built pc{' '}
            </a>
            but also have a dual boot setup with whatever Linux distro I'm
            currently trying about. As of right now my distro of choice is{' '}
            <a
              target='_blank'
              className='text-secondary'
              href='https://pop.system76.com/'
            >
              Pop Os
            </a>
            .
          </p>
        </article>
        <article className='mt-4'>
          <h3>Tools</h3>
          <ul className='flex flex-col gap-2'>
            <li>VSCode</li>
            <li>
              <a
                target='_blank'
                className='text-secondary'
                href='https://marketplace.visualstudio.com/items?itemName=enkia.tokyo-night'
              >
                Tokyo Night
              </a>{' '}
              <span>color scheme</span>
            </li>
            <li>
              <a
                target='_blank'
                className='text-secondary'
                href='https://github.com/ohmyzsh/ohmyzsh'
              >
                Zsh
              </a>{' '}
              <span>Oh My Zsh</span>
            </li>
          </ul>
        </article>
      </section>
    </Layout>
  );
};

export default Uses;
