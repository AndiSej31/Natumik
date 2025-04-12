document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.category-section');

    sections.forEach(section => {
      section.classList.add('collapsible');
      section.addEventListener('click', () => {
        section.classList.toggle('expanded');
      });
    });

    const faunaFacts = [
      "Did you know? The Balkan lynx is one of the rarest cats in Europe!",
      "Did you know? Macedonia is home to golden eagles soaring above the mountains!",
      "Did you know? Brown bears roam the dense forests of the Shar Mountains!"
    ];

    const floraFacts = [
      "Did you know? The Macedonian oak is native only to this region!",
      "Did you know? Edelweiss grows high up in Macedonia's alpine zones!",
      "Did you know? Macedonian herbs are used in traditional medicine for centuries!"
    ];

    function rotateFacts(elementId, facts) {
      let index = 0;
      const container = document.getElementById(elementId);
      container.textContent = facts[index];
      container.classList.add('show');
      setInterval(() => {
        container.classList.remove('show');
        setTimeout(() => {
          index = (index + 1) % facts.length;
          container.textContent = facts[index];
          container.classList.add('show');
        }, 500);
      }, 5000);
    }

    rotateFacts("did-you-know-fauna", faunaFacts);
    rotateFacts("did-you-know-flora", floraFacts);
  });