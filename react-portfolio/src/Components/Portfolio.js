import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    const data = this.props.data;
    if (!data) {
      return null;
    }
    const {projects} = data
      const projectsData = projects.map(proj=>{
        const projectImage = 'images/portfolio/'+proj.image;
        return <div key={proj.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={proj.url} title={proj.title}>
               <img alt={proj.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>一部分ReactJS项目...</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projectsData}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
