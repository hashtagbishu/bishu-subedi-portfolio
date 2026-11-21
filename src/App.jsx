import React from 'react'
import {ArrowUpRight,Camera,BriefcaseBusiness,Mail,Code2,UserRound,Send,Instagram, Github} from 'lucide-react'
import {profile,projects} from './data'

const greetings = ['Hello','नमस्ते','Hola','Bonjour','こんにちは','안녕하세요','مرحبا','Ciao']

export default function App(){
  const socials = [
    {name:'GitHub',url:profile.github,Icon:Code2},
    {name:'Instagram',url:profile.instagram,Icon:Camera},
    {name:'LinkedIn',url:profile.linkedin,Icon:BriefcaseBusiness},
    {name:'Email',url:profile.email ? 'mailto:'+profile.email : '',Icon:Mail}
  ].filter(item=>item.url)

  function sendMessage(event){
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const message = form.get('message')
    const subject = encodeURIComponent('Portfolio message from '+name)
    const body = encodeURIComponent('Name: '+name+'\nEmail: '+email+'\n\n'+message)
    window.location.href = 'mailto:'+profile.email+'?subject='+subject+'&body='+body
  }

  return <div className="site-shell">
    <header className="nav wrap">
      <a className="brand" href="#top"><span className="brand-mark">b.</span><span>bishu<span className="muted">subedi</span></span></a>
      <nav><a href="#about">About</a><a href="#work">Projects</a><a href="#contact" className="nav-contact">Let's talk <ArrowUpRight size={14}/></a></nav>
    </header>

    <main id="top">
      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> A LITTLE CORNER OF THE INTERNET</div>
          <div className="hello-line"><span className="hello-static">Say</span><span className="greeting-window"><span className="greeting-track">{greetings.map(word=><span key={word}>{word}</span>)}<span>Hello</span></span></span></div>
          <h1>I'm <span className="name-gradient">Bishu Subedi.</span></h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={16}/></a><a className="text-link" href="#contact">Get in touch ↗</a></div>
          <div className="hero-foot"><span>BASED IN {profile.location.toUpperCase()}</span><span>CURIOUS BY DEFAULT</span></div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-frame">
            {profile.photo ? <img className="portrait-image" src={profile.photo} alt="Portrait of Bishu Subedi"/> : <div className="portrait-placeholder"><div className="portrait-icon"><UserRound size={54}/></div><strong>YOUR PHOTO GOES HERE</strong><span>Add a portrait to src/data.js</span></div>}
            <span className="portrait-index">01 / ME</span>
          </div>
          <div className="portrait-note">STUDENT · BUILDER · DREAMER <span>✳</span></div>
          <div className="portrait-sticker">nice to<br/>meet you!</div>
        </div>
        <a className="scroll-cue" href="#about">SCROLL TO EXPLORE ↓</a>
      </section>

      <div className="ticker">नमस्ते　·　HELLO　·　BONJOUR　·　HOLA　·　こんにちは　·　CIAO　·　안녕하세요　·　HELLO　·　</div>

      <section className="about wrap section" id="about">
        <div className="section-kicker">01 / A LITTLE ABOUT ME</div>
        <div className="about-grid"><h2>Curious by<br/>default. <em>Creative</em><br/>by choice.</h2><div className="about-body"><p>I'm a student who enjoys exploring technology, building little projects and learning how good ideas become real experiences.</p><p>I'm interested in the space where code, design and creativity meet. This is my little corner of the internet — a place to share what I'm learning and making.</p><div className="mini-note">✳ Currently learning, experimenting and building one project at a time.</div></div></div>
        <div className="interest-grid"><article><Code2/><h3>Development</h3><p>Building useful things for the web.</p></article><article><Camera/><h3>Creative work</h3><p>Exploring ideas, visuals and design.</p></article><article><Mail/><h3>Connections</h3><p>Always happy to meet curious people.</p></article></div>
      </section>

      <section className="work section" id="work"><div className="wrap"><div className="section-kicker">02 / THINGS I'VE BEEN MAKING</div><div className="work-heading"><h2>Selected <em>projects.</em></h2><p>A few experiments, concepts<br/>and projects from my desk.</p></div><div className="project-list">{projects.map(p=><article className={'project project-'+p.tone} key={p.number}><div className="project-number">{p.number} — FEATURED PROJECT</div><div className="project-main"><div><div className="project-type">{p.type}</div><h3>{p.name}</h3><p>{p.description}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div><div className="project-visual"><div className="visual-orb"/><span className="visual-glyph">{p.number==='01'?'↗':p.number==='02'?'✳':'◒'}</span><span className="visual-caption">BISHU / PROJECT {p.number}</span></div></div>{p.url?<a className="project-link" href={p.url} target="_blank" rel="noreferrer">View project ↗</a>:<span className="project-link muted-link">Project details coming soon</span>}</article>)}</div></div></section>

      <section className="social-section wrap section">
        <div><div className="section-kicker">03 / FIND ME AROUND THE WEB</div><h2>Let's be <em>social.</em></h2><p className="social-intro">Follow along, see what I'm building, or just drop by to say hello.</p></div>
        <div className="social-links">{socials.map(({name,url,Icon})=><a key={name} href={url} target="_blank" rel="noreferrer"><span className="social-icon"><Icon size={20}/></span><span>{name}</span><ArrowUpRight size={16}/></a>)}</div>
      </section>

      <section className="contact wrap section" id="contact">
        <div className="section-kicker">04 / YOUR TURN</div>
        <div className="contact-layout">
          <div className="contact-copy-block"><p className="contact-label">HAVE SOMETHING IN MIND?</p><h2>Drop me a<br/><em>message.</em></h2><p>Have a question, an idea, or just want to say hi? Send me a note.</p><a className="email-direct" href={'mailto:'+profile.email}><Mail size={17}/>{profile.email}</a></div>
          <form className="contact-form" onSubmit={sendMessage}>
            <label>Your name<input name="name" type="text" placeholder="What should I call you?" required/></label>
            <label>Your email<input name="email" type="email" placeholder="you@example.com" required/></label>
            <label>Your message<textarea name="message" rows="5" placeholder="Write something..." required/></label>
            <button className="button button-primary" type="submit">Send message <Send size={15}/></button>
            <p className="form-note">This opens your email app with the message ready to send.</p>
          </form>
        </div>
      </section>
    </main>

    <footer className="footer wrap"><a className="brand" href="#top"><span className="brand-mark">b.</span><span>bishu<span className="muted">subedi</span></span></a><div className="socials">{socials.map(({name,url,Icon})=><a key={name} href={url} aria-label={name} target="_blank" rel="noreferrer"><Icon size={17}/></a>)}</div><p className="footer-copy">MADE WITH CURIOSITY · © {new Date().getFullYear()} BISHU SUBEDI</p></footer>
  </div>
}
