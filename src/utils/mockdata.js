import profile1 from '../assets/images/emilywang.jpeg'
import profile2 from '../assets/images/andychen.jpeg'
import profile3 from '../assets/images/emir.jpeg'

export const article1 = {
  creator: "Emily Wang",
  thumbnail: profile1,
  time: "10:38 AM (4 hours ago)",
  content: "Hi Teacher, the attached file is my homework of chapter 2. And here comes a question: Why in the following code the height of the div is bigger than the height of the img ? There is a gap below the image, but it doesn’t seems to be a padding/margin. What is the gap or extra space below image?",
  attaches: [
    { name: "HW-2.zip", onClick: () => {}},
    { name: "HW-2-2.zip", onClick: () => {}}
  ]
}

export const article2 = {
  creator: "Andy Chen",
  thumbnail: profile2,
  time: "13:24 AM (1 hours ago)",
  content: "Hi Emily, by default, an image is rendered inline, like a letter so it sits on the same line that a, b, c and d sit on. There is space below that line for the descenders you find on letters like g, j, p and q. You can: 　• adjust the vertical-align of the image to position it elsewhere (e.g. the middle ) or 　• change the display so it isn’t inline."
}

export const users = [
  {
    name: "Emir Wicks",
    email: "emir.wicks@mail.com",
    verifies: true,
  },
  {
    name: "Zaina Goldsmith",
    email: "zaina863@mail.com",
    verifies: true,
  },
  {
    name: "Mahima Lopez",
    email: "Mahima.L@mail.com",
    verifies: true,
  },
  {
    name: "Pharrell Murray",
    email: "Pharrell.Murray@mail.com",
    verifies: true,
  },
  {
    name: "Annika Mcbride",
    email: "Annika.Mcbride@mail.com",
    verifies: true,
  },
  {
    name: "Sabrina Stephenson",
    email: "Sabrina420@mail.com",
    verifies: true,
  },
  {
    name: "Fatimah Clark",
    email: "fck@mail.com",
    verifies: true,
  },
  {
    name: "Klaudia Rhodes",
    email: "cloud.23@mail.com",
    verifies: true,
  },
  {
    name: "Tillie Lucero",
    email: "Tillie.Lucero@mail.com",
    verifies: true,
  },
]

export const userdata = {
  name: "Emir Wicks",
  profilePic: profile3,
  email: "emir.wicks@mail.com",
  verified: false,
  verifyDate: "2020/4/12",
  accLevel: "TA",
  lecture: false,
  coupon: true,
  msg: false,
  setting: false,
  task: true
}