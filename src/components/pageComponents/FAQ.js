import QuestionList from "./GeneralComponents.js/QuestionList";
const FAQ = () => {
    const faq = [
        {
            question:"What is Hack the North?",
            answer:"Hack the North is Canada's biggest hackathon, where 3,000+ students of different skill levels come together from around the world to experiment and create unique software or hardware projects from scratch. We empower and enable teams to make something great in only 36 hours by providing an abundance of resources like workshops, mentors, sponsors, and hardware components."
        },
        {
            question:"How much does it cost to attend Hack the North?",
            answer:"Admission to Hack the North is completely free! We will provide all the resources and mentorship our hackers need to build something incredible"
        },
        {
            question:"Will Hack the North 2021 happen in person or virtually?",
            answer:"Hack the North 2021 will be a virtual-first event, but we may introduce some in-person aspects for hackers located in the Waterloo Region depending on the public health guidelines around COVID-19 when the event takes place in September. Stay tuned to hear the latest updates by following our social media channels and signing up for our mailing list!"
            
        },
        {
            question:"Who Can Participate?",
            answer:"Students of any education level from anywhere in the world are eligible to apply for Hack the North!"
        },
        {
            question:"What Kind of Workshops,talks and activites will there be?",
            answer:"Previously, we’ve held workshops and talks for a range of skill levels from beginner to advanced like Intro to React and Exploring and Wrangling Data with Pandas. Other workshops also explore various programming tools such as APIs, databases, and platforms. Activities like VR demos, meetups, and even karaoke happen throughout the weekend. Whether it’s for relaxation or health, novelty or competition, our team has something exciting prepared for you to enjoy!"
        },
        {
            question:"What if i've never been to a hackathon before?",
            answer:"Hack the North welcomes students of all skill levels. In previous years, 30% of students have attended Hack the North as their first hackathon. We’ll have talks, mentors and workshops to help you with your project; hackathons can be a great place to learn new skills in a short amount of time. Just be eager to learn, and excited to meet lots of awesome people."
        },
        {
            question:"How will communication work?",
            answer:"Prior to the event, we’ll be sharing updates on our Instagram, Twitter, Facebook, LinkedIn, and through our mailing list. During the event, you’ll get live updates and announcements through our Discord server."
        },
        {
            question:"What is the deadline for Round 1?",
            answer:"Round 1 will be open until July 30, 2021 at 11:59 PM EDT."
        },
        {
            question:"What platform will you be using to host the event?",
            answer:"We have been exploring multiple platform options to ensure an amazing experience for our attendees and will be announcing them very soon. Stay up to date by following our social media platforms and by subscribing to this year’s mailing list"
        },
        {
            question:"What's the difference between Round 1 and Round 2?",
            answer:"Applications submitted in Round 1 will be reviewed first. If you don't hear back from us in the first release of acceptances, you will be automatically reconsidered in Round 2. There is no need to reapply in Round 2 if you applied in Round 1!"
        },
        {
            question:"Are you still looking for sponsors?",
            answer:"Hack the North welcomes students of all skill levels. In previous years, 30% of students have attended Hack the North as their first hackathon. We’ll have talks, mentors and workshops to help you with your project; hackathons can be a great place to learn new skills in a short amount of time. Just be eager to learn, and excited to meet lots of awesome people."
        },
        {
            question:"Can I be a hacker,a mentor, and a workshop lead?",
            answer:"Yes, you can be all three! Note that workshop lead and mentor applications close on July 15, 2021 and August 6, 2021 respectively, so be sure to apply before then."
        },
        {
            question:"What is I miss the deadline for Round 1?",
            answer:"Hack the North welcomes students of all skill levels. In previous years, 30% of students have attended Hack the North as their first hackathon. We’ll have talks, mentors and workshops to help you with your project; hackathons can be a great place to learn new skills in a short amount of time. Just be eager to learn, and excited to meet lots of awesome people."
        },
        {
            question:"Can I be a hacker and a volunteer?",
            answer:"You will not be able to attend Hack the North as both a hacker and a volunteer, but feel free to apply to both! If you are accepted as a hacker, please let us know that you will no longer be able to volunteer."
        },
        {
            question:"When and how will I hear back about my application",
            answer:"Sit tight, our team will be reviewing your applications over the next few weeks. Decisions will be sent via email after Round 2 closes. Keep an eye on our Facebook, Instagram, and Twitter for updates!"
        },



    ]
    return (
        <div>
            <h1>Frequently Asked Questions!</h1>
            <br></br>
            <QuestionList data = {faq}/>
        </div>
    )
}

export default FAQ;