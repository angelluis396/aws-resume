document.addEventListener('DOMContentLoaded', function() {
  const timelineData = [
      {
          date: 'August 2021 - Present',
          title: 'JPMorgan Chase: Software Engineer I & II',
          description: 'Developed new features for financial planning/tracking microservices, optimized platform performance, and configured application monitoring systems to enhance reliability.'
      },
      {
          date: 'May 2018 – August 2021',
          title: ' Adventures in Learning Daycare Center: Web Developer',
          description: 'Performed website audits, optimizations, and resolved technical issues. As well as developed and maintained responsive web pages using HTML, CSS, and JavaScript.'
      },
      {
          date: 'August 2020 – August 2021',
          title: 'Marciano Law Firm: Web Developer',
          description: 'Worked with the legal team to improve the websites frontend, implementing features like a slideshow toggle button to enhance user experience.'
      },
      {
        date: 'October 2019 – April 2020',
        title: 'Thinkful/bloc: Software Engineering Apprenticeship',
        description: 'Collaborated extensively with senior web developers, dedicating several hours each week to creating and deploying mobile-first applications while acquiring proficiency in new languages and frameworks.'
      }
  ];
  
      const timeline = document.getElementById('timeline');
  
      timelineData.forEach((item, index) => {
          let entry = document.createElement('div');
          entry.classList.add('timeline-entry');
          entry.setAttribute('id', 'entry-' + index);
  
          let dot = document.createElement('div');
          dot.classList.add('timeline-dot');
  
          let date = document.createElement('div');
          date.textContent = item.date;
          date.classList.add('timeline-date');
  
          let content = document.createElement('div');
          content.classList.add('timeline-content');
          content.setAttribute('id', 'content-' + index);
  
          let title = document.createElement('h3');
          title.textContent = item.title;
  
          let description = document.createElement('p');
          description.textContent = item.description;
          description.style.display = 'none'; // Initially hide the description
  
          // Click event to toggle the description visibility
          entry.addEventListener('click', function() {
              description.style.display = description.style.display === 'none' ? 'block' : 'none';
          });
  
          content.appendChild(title);
          content.appendChild(description);
  
          entry.appendChild(dot);
          entry.appendChild(date);
          entry.appendChild(content);
  
          timeline.appendChild(entry);
      });
  });