import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  private dataList = [
    {
      id: 100,
      date: '16 August, 2024',
      img: 'images/IMGS/972343b4952d1d3547391031bb810d9e_XL.jpg',
      title:
        'UNIOSUN Felicitates Prof. Olukoya Ogen on His Induction as Fellow',
      content:
        'Professor Olukoya Ogen of Osun State University was inducted as a Fellow of the Historical Society of Nigeria (HSN) on October 14, 2021, during the 66th Annual Congress in Enugu. The fellowship is the highest honor from HSN, recognizing significant contributions to historical ',
      details: [
        'The Management of Osun State University, under the leadership of the Vice-Chancellor, Professor Odunayo Clement Adebooye, has heartily felicitated Professor Olukoya Ogen, a foremost historian and highly productive and prolific scholar, on his induction as Fellow of the prestigious Nigerian Academy of Letters (NAL).',
        "In a statement released by the University on Thursday, 15th August, 2024, the institution's Public Relations' Officer, Ademola Adesoji, stated that the investiture was held in Lagos by the Nigerian Academy of Letters, where Professor Ogen, the University's Director of the Office of Research and Innovation Management was conferred with the Fellowship of the Academy for his outstanding contributions to history and humanistic scholarship both nationally and internationally.",
        'Professor Ogen, a historian of intercontinental repute, was honored alongside other eminent scholars, marking a significant milestone in his academic career. His induction into the Nigerian Academy of Letters underscores his pioneering work in historical research, his commitment to scholarship, and his exceptional leadership in promoting research-driven innovations. Professor Ogen has attracted and productively utilized research grants in excess of over a billion naira; collaborated and networked with many scholars from every continent of the world and played significantly impactful leadership and mentoring role for colleagues in the world of grantsmanship.',
        'In a message of felicitation, the Vice-Chancellor, Professor Odunayo Clement Adebooye, expressed profound pride in Professor Ogen\'s recognition by the NAL. He said: "On behalf of the entire Osun State University community, I extend our heartfelt congratulations to Professor Olukoya Ogen on this remarkable achievement. His induction into the Nigerian Academy of Letters is a testament to his outstanding contributions to the field of history and academia as a whole. We are incredibly proud of him, and this honor reflects the great strides Osun State University is making in nurturing top-tier scholars who are leaders in their respective fields. We wish Professor Ogen continued success and look forward to witnessing more of his invaluable contributions to the world of scholarship." ',
      ],
    },
    {
      id: '101',
      img: 'images/IMGS/images.jpeg',
      date: '1 December, 2017',
      title: 'US Varsity Appoints Ogen, ACE Provost As Research Professor',
      content:
        'Professor Olukoya Ogen, Provost of Adeyemi College of Education, Ondo, was appointed as a Senior Mentoring Scholar and full Professor of Research at the Southern University, International Center for Information Technology and Development (ICITD) in Baton Rouge...',
      details: [
        'The Southern University, International Center For Information Technology and Development (ICITD), Baton Rouge, Louisiana, United States of America has appointed Professor Olukoya Ogen, the Provost, Adeyemi College of Education, Ondo as Senior Mentoring Scholar and full Professor of Research of the institution.',
        'In the letter of appointment dated 24th November, 2017 and signed by Executive Director of International Center for Information and Development, Southern University, Professor Victor Mbarika said Prof. Ogen is expected to take leadership position in research activities at the University and be involved in the mentoring of Ph.D students and junior lecturers.',
        'The appointment letter reads in part, “Looking at your research, administrative and overall leadership in higher education as well as ICT implementation in higher education, you fit perfectly into Southern University’s goal to remain a leading research and teaching institution in the United States and beyond”.',
        'The institution, Southern University which was founded in 1880 further expressed her excitement that Professor Ogen will be joining the Research Centre because ‘‘his pool of experience will be most valuable to us and to the University Community”.',
        'It would be recalled that the Provost after delivering the Keynote Address at the 2017 International Conference on Accounting Information Technology organised by ICITD, Southern University, was conferred with a Lifetime Achievement Award for ICT Adoption in Higher Education and also appointed as Honourary Mayor-President of Baton Rouge by the Mayor of the City of Baton Rouge, the capital of the State of Louisiana, Her Excellency, Sharon Weston Broome.',
        'The Provost who is currently on a working visit to the US has so far signed two MoUs on behalf of Adeyemi College of Education with Southern University, Baton Rouge, Louisiana, and Morgan State University, Baltimore, Maryland.',
        'The MoUs cover the donation of a multi-million naira e-learning centre, acquisition of a Remotely Piloted Aerial System (RPAS), training of staff for Master and Doctoral programmes, staff/student exchange, curriculum development as well as joint collaborative research endeavours.t',
      ],
    },
  ];

  getDataList() {
    return this.dataList;
  }
}
