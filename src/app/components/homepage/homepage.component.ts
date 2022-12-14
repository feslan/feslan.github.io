import { Component, OnInit } from '@angular/core';
import {
  ClickMode,
  Container,
  Engine,
  HoverMode,
  MoveDirection,
  OutMode,
} from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import mixpanel from 'mixpanel-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  id = 'tsparticles';
  particlesOptions = {
    background: {
      color: {
        value: '#ffffff',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push,
        },
        onHover: {
          enable: true,
          mode: HoverMode.connect,
          parallax: { enable: false, force: 60, smooth: 10 },
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#000000',
      },
      links: {
        color: '#000000',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  particlesLoaded(container: Container): void {}

  async particlesInit(engine: Engine): Promise<void> {
    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }
  constructor() {}

  ngOnInit(): void {}
  mixpanel(type: any) {
    let lang = navigator.language;
    let timexone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (type === 'resume') {
      mixpanel.track('resume download', {
        browserLanguage: lang,
        timezone: timexone,
      });
    } else if (type === 'github') {
      mixpanel.track('github', {
        browserLanguage: lang,
        timezone: timexone,
      });
    } else if (type === 'instagram') {
      mixpanel.track('instagram', {
        browserLanguage: lang,
        timezone: timexone,
      });
    } else if (type === 'linkedin') {
      mixpanel.track('linkedin', {
        browserLanguage: lang,
        timezone: timexone,
      });
    } else if (type === 'medium') {
      mixpanel.track('medium', {
        browserLanguage: lang,
        timezone: timexone,
      });
    } else if (type === 'email') {
      mixpanel.track('email', {
        browserLanguage: lang,
        timezone: timexone,
      });
    }
  }
}
