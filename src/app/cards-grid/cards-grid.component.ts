import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-cards-grid',
  templateUrl: './cards-grid.component.html',
  styleUrls: ['./cards-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsGridComponent implements OnInit, AfterViewChecked {
  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;
  count = 0;
  init = true;
  cards = [
    {
      unique_id: "1-2", show: false, type: "audio", userId: "@monkey504564",
      data: [{
        unique_id: "1", show: false, type: "audio", userId: "@monkey504564", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore etc.Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquipex ea commodo consequat."
      },
      {
        unique_id: "2", show: false, type: "audio", userId: "@user207", title: "Professor John Doe, explain the concept of the term “Lorem ipsum”",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore etc.Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquipex ea commodo consequat."
      }]
    },
    { unique_id: "3", show: false, type: "text", userId: "@yourpop603", title: "Through sheer determination and willpower I’m where I am today, gradually reclaiming my life.", desc: "I think bringing a sense of realism to the writer in the dark trope might dilute some of the lasting toxicity that may be perpetuated by having unpopular young kids rise to fame by betraying their peers." },
    { unique_id: "4", show: false, type: "text", userId: "@crackhead603", title: "Marvel universe went fucking crazy with this movie", desc: "Everyone is familiar with the act of turning to a neighbor and whispering a coveted secret. It’s messy, fun, entertaining, and hurtful even. But alas, scandal makes the world go round. Maybe that is the reason shows like Bridgerton, which had a successful season 2 premiere on March 25, are so popular. The desire for gossip is fueled by having an underdog or wallflower hold a secret power over all the elite personnel in the story. It creates a sense of triumph that a beautifully flawed background character with an alluring voice stirs the pot in a way that keeps the audience engaged and their hands clean of the mess. This writer-in-the-dark theme is not a new one; many of today’s generation grew up with it ingrained in the most popular films and shows. The first time I recall seeing this narrative was in Radio Rebel, which made its debut on the Disney Channel 10 years ago. Debby Ryan played a mousy high schooler with an anonymous influential radio show under the name of Radio Rebel, which gets more attention once people start to question her identity. The movie was mainly based on authenticity and encouraged others to be themselves, but there are moments where Radio Rebel calls her classmates out by name, sparking gossip and speculation. While this is largely a lighthearted narrative, because it’s Disney after all, it still sets a precedent for how early kids were exposed to the idea that being an underdog is acceptable if you can get people talking about each other. The next writer in the dark I observed was (spoiler alert) Dan Humphrey as Gossip Girl. Gossip Girl was a nameless blogger who terrorized Manhattan’s elite and held them accountable for each scandal and misstep. I think this narrative spoke to Gen Z particularly because it centered around technology and how phones can be mass weapons of destruction in teenage lives. Each text that Gossip Girl sent out made the audience’s eyes captivated even more. While each person watching couldn’t be a famous upper Eastsider, they could be inspired to act as their town’s gossip girl. The level of relatability makes Gossip Girl and similar characters seem like icons as if actions don’t have consequences. I shamelessly binged the second season of Bridgerton shortly after its release, which brings us to the trifecta of undercover scandal reporters. Bridgerton is narrated by Lady Whistledown who is an unidentified scandal sheet writer that observes the ton in 19th century London as lords and ladies work to find their match. Season two was filled with the most amazing enemies to lovers, pining, and tension, but I particularly liked seeing the overarching plotline of Lady Whistledown be played out more. Her true identity as unsuspecting Penelope Featherington was revealed to the audience at the end of last season, so there is little mystery left to feed on. There does seem to be some consequences shown in this version of the trope, however. As the Queen is seen trying to uncover her identity, Lady Whistledown must betray her best friend to clear her name. I liked that this narrative was somewhat realistic with the plot of betrayal sinking into mystery and notoriety. It felt more fulfilling, maybe even dramatic, to see the conflict and betrayal presented clearly. I don’t think it is the intention of any one of these productions to glamorize scheming, but as a generation raised on these forms of media, it’s easy to internalize the message. I think bringing a sense of realism to the writer in the dark trope might dilute some of the lasting toxicity that may be perpetuated by having unpopular young kids rise to fame by betraying their peers." },
    {
      unique_id: "5-6", show: false, type: "audio", userId: "@punk207",
      data: [{
        unique_id: "5", show: false, type: "audio", userId: "@punk207", title: "He woke up, rolled over, and reached for her",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore etc.Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquipex ea commodo consequat."
      },
      {
        unique_id: "6", show: false, type: "audio", userId: "@user209", title: "They told me they could save either my wife or my son",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore etc.Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquipex ea commodo consequat."
      }]
    },
    { unique_id: "7", show: false, type: "text", userId: "@victim108", title: "Why John Mayer Should Be Scared For Speak Now (Taylor’s Version)", desc: "Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velicillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
    { unique_id: "8", show: false, type: "text", userId: "@user504", title: "Cancel Culture: Does It Have A Positive Or Negative Effect On This Generation?", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore etc.Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate iscillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deseruntmollit anim id est laborum. Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua." },
    { unique_id: "9", show: false, type: "text", userId: "@user007-207", title: "This is my story. Don't judge!", desc: "On Feb 28, asine eimmn kin sad weadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat. Duis aute irure dolor in first time in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis cocaineexercitation ullamco laboris nisi ut aliquip exea commodo LSD. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non  times, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute iruredolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Sunt in culpa qui officia deserunt." },
    {
      unique_id: "10-11", show: false, type: "audio", userId: "@user007-27",
      data: [{
        unique_id: "10", show: false, type: "audio", userId: "@user007-27", title: "After months of waiting he finally saw his wife.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore etc.Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquipex ea commodo consequat."
      },
      {
        unique_id: "11", show: false, type: "audio", userId: "@user007-27", title: "He never wanted to leave his wife.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore etc.Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquipex ea commodo consequat."
      }]
    },
    { unique_id: "13", show: false, type: "text", userId: "@monkey507", title: "True story", desc: "When Ciarín passed away that was the deciding point in going to treatment for addiction. My decision changed my life for the better, I got help with that problem. That’s not to say that I am perfect. I do absolutely have problems. Being at Cedars helped me realize quickly that it wasn’t so much the drugs but my behaviours as well. I found out through my family history that I was wired an addict since the day I was born. But now I can deal with that. I have the tools to be alright with myself. I love myself today. I love who I can be and who I am. I learnt that it is okay to be who I was. I’m proud of who I am today. Thanks to a 12-Step program I can work through all of the behaviours and catch myself before I act out on them." },
    {
      unique_id: "14-19", show: false, type: "audio", userId: "@punk207",
      data: [{
        unique_id: "14", show: false, type: "audio", userId: "@punk207", title: "The heart monitor chimed its final tune.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore etc.Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquipex ea commodo consequat."
      },
      {
        unique_id: "19", show: false, type: "audio", userId: "crack101", title: "I told her she would be okay.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore etc.Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquipex ea commodo consequat."
      }]
    },
    { unique_id: "15", show: false, type: "text", userId: "@user007-9", title: "Big Little Lie", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore etc.Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate iscillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deseruntmollit anim id est laborum. Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam." },
    { unique_id: "16", show: false, type: "text", userId: "@punk102", title: "Will The ‘Gossip Girl’ Reboot Survive In The Deuxmoi Era?", desc: "On Feb 28, asine eimmn kin sad weadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat. Duis aute irure dolor in first time in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis cocaineexercitation ullamco laboris nisi ut aliquip exea commodo LSD. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non  times, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute iruredolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Sunt in culpa qui officia deserunt." },
    // {unique_id:"17",show:false,type:"audio",userId: "@user007-007",data:[{unique_id:"17",show:false,type:"audio",userId: "@user007-007"}]},
    { unique_id: "18", show: false, type: "text", userId: "@monkey54", title: "Child Abuse", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore etc.Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate iscillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deseruntmollit anim id est laborum. Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam." }
  ];
  public myOptions: NgxMasonryOptions = {
    gutter: 36,
    fitWidth: true,
  };
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewChecked() {
    if (this.init) {
      const interval = window.setTimeout(() => {
        if (this.init) {
          this.masonry.layout();
          window.clearTimeout(interval);
          this.init = false;
          console.log("initial load")
        }
      }, 500);
    }
  }
  updateCard(input) {
    this.cards.filter(c => c.type === "audio").forEach(c => {
      if (c.data[0].unique_id !== input.unique_id)
        c.data[0].show = false
      if (c.data[1].unique_id !== input.unique_id)
        c.data[1].show = false
    });
  }
  reloadCards(input) {
    this.masonry.layout();
  }
}