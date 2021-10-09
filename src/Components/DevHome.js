import React, { Component, useLayoutEffect } from 'react'

import { PortfolioPage } from 'react-dev-portfolio-builder'
import 'react-dev-portfolio-builder/dist/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import './devhomeextra_st.css'
import Publications from './publication_list.json'


const IntelPropItems = [
  { 
    'name': 'crop health',
    'description': 'Crop Health - EI Identifier number: 2017-UCD-054-I',

  },
  { 
    'name': 'GrassLogic',
    'description': 'GrassLogic - EI Identifier number: 2021-UCD-022-I',
  },
  { 
    'name': 'GrassView',
    'description': 'GrassView (in progress)',
  }
];

const about = "Coming from the Computer Science area, my undergraduate course in Information Systems has laid strong foundations about software engineering, commercial systems, project management and the first insights of artificial intelligence that desperted my interest towards research and innovation. Following up to my Masters’ degree in Computer Engineering I had the opportunity to work with one of the best robotics and automation groups in Brazil which provided me with significant experience with artificial intelligence, machine learning, computer vision, probabilistic and bio-inspired robotic systems. After that, I moved overseas to Dublin to pursue a PhD in Biosystems Engineering at UCD where my focus turned into agriculture. In Ireland, I developed a web portal and AI framework for the creation of disease monitoring models based on expert human knowledge that was derived into logical systematic elements for automated disease assessment in fields. During my PhD I also had the chance of learning about crop science and agriculture related topics. Having access to the university computer cluster, I also deployed cutting-edge deep learning models for disease detection in crops using RGB images. Subsequently to my PhD, I was privileged to be selected to be part of a world-class research group with the UCD Newman foundation. At this stage, I developed my postdoctoral project in Agri-Systems Modelling that was focused on the prediction of dairy farms' grass growth across Ireland which is currently being implemented by a top European agriculture company. My experience have been around hands-on software engineering using a range of different technologies as seen for my project list."

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function ItemList(props) {
  const items = props.listV;
  const listItems = items.map((item, index) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={index}
              value={item.description} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

function PubList(props) {
  const items = props.listV;
  const listItems = items.map((item, index) =>
      <ListItem key={index}
              value={item} />
  );   
  return (
    <ul>
      {listItems}
    </ul>
  );
}


class DevHome extends Component {
  
  render() {
    console.log(Publications)
    
    return (
      <PortfolioPage
        user={{
          firstname: 'Felipe',
          lastname: 'Guth',
          headline: 'Researcher/Systems Analyst and Developer' ,          
          title: 'BSc - MSc - PhD - PostDoc',
          mailto: 'felipe.guth@ucdconnect.ie',
          imageUrl: 'https://drive.google.com/uc?id=1y3dKYzgCeCreJuFM76EqdA6eJEHqRm-m',
          location: 'Remote',
          github: 'https://github.com/felipeguth',
         
          
          // github: 'https://github.com/felipeguth1',
          
          
          projects: [


            {
              name: 'Ethereum Blockchain',
              owner: 'Felipe Guth',
              private: false,
              url: 'https://github.com/felipeguth/ETH_Blockchaing_Intro',
              startdate: new Date(2021, 8, 1),
              current: true,
              thumbnail: "https://drive.google.com/uc?id=1gxXOwBmha0NasySaq2HmLF54q1bno2h9",
              info: 'Practical online bootcamp for ethereum blockchain development covering the following topics: Become Proficient In Solidity Programming By Building Projects. Understand Blockchain Technology (Theory & Practical). Understand How Smart Contracts Work (Theory & Practical). Become Proficient Using Ethereum’s Major Core Development Tools. Understand The Development Functions Of Ethereum. Understand How Decentralised Technology Works. Be Able To Comprehend The Structure Of Solidity Code. Understand How To Use Web3 In Conjunction With The Course Projects. Become Proficient In Advanced Development With Truffle & Teams.',
              skills: [
                { name: 'Blockchain Technology', group: 'Blockchain Development' }, 
                { name: 'Defi', group: 'Blockchain Development' },
                { name: 'Smart Contracts', group: 'Blockchain Development' }, 
                { name: 'Ethereum', group: 'Blockchain Development' },   
                { name: 'Metamask', group: 'Blockchain Development' }, 
                { name: 'Smart Wallet', group: 'Blockchain Development' },
                { name: 'Descentralized Supply Chain', group: 'Blockchain Development' }, 
                { name: 'Solidity', group: 'Blockchain Development' },
                { name: 'web3', group: 'Blockchain Development' },
                { name: 'Truffle', group: 'Blockchain Development' },
                { name: 'Blockchain Development', group: 'Blockchain Development' },

                { name: 'React', group: 'Web Development' },
                { name: 'NodeJS', group: 'Back-end' },
               
                

                { name: 'GIT', group: 'System Versioning' }             
                
              ],
            },


            {
              name: 'GrassView',
              owner: 'Felipe Guth',
              private: true,
              startdate: new Date(2019, 9, 1),
              enddate: new Date(2021, 8, 1),
              thumbnail: "https://drive.google.com/uc?id=1Qfs0XTmwG4S1pQJsSQ0ydkHwxSvFTjdt",
              images:["https://drive.google.com/uc?id=1QXXClzU1GaqlpcpEMGcHJXXw--QwavvY", "https://drive.google.com/uc?id=1Qfs0XTmwG4S1pQJsSQ0ydkHwxSvFTjdt", 
              "https://drive.google.com/uc?id=15lPBtDOQRVpCZJCzksN638N3Y1G_5A2D", "https://drive.google.com/uc?id=1Iyy_EIwsHV93GLtQjskuZ9ILlp1PxPGM", 
              "https://drive.google.com/uc?id=1BjdsYmZ3w9zcrqD6Pd2rrb7p6nMSXFOt", "https://drive.google.com/uc?id=1t62_J15rDYeHqN1d65HZX4sk3ei2o2xq"],                
              info: '(Postdoc). This project deploys two Deep Learning Convolutional Neural Networks (CNNs) to estimate the quantity of fresh weight (kg/ha) of perennial grass present in a given dairy farm paddock by using standard RGB pictures as input. /r/n An extensive dataset of multiple paddocks pictures was collected from farms across Ireland during the year of 2020. Coupled with the collected photographs were also diverse measurements such as fresh weight that had served as the ground-truth labels for the application. 90% of the collected pictures were used for training and validation while 10% of images were later use for testing and computing of metrics of the CNNs. A divide and conquer approach was adopted for classification, then regression using two CNNs. The first CNN was deployed to classify bins of grass fresh weight while the second one was deployed from scratch to predict the real value fresh weight figures using also as input the bin classification of the first CNN. CNN1 has applied a fine-tuning strategy by retraining a ResNet architecture of 152 layers for the classification of 15 different bins. Every bin has a range of min to max fresh weight. At this first stage the system had the task of classifying what was the correct bin for each image. CNN2 was designed and trained from scratch for predicting the actual real value for the grass fresh weight, using the classification of the previous one. The system was developed in Python 3 using mainly the Pytorch library for the deployment of the CNNs. In general, accuracy results of 88% were achieved. A web portal was also developed in order to provide a quick and simple interface to allow for the testing of the system. By accessing the website, a user can upload an image and get a response from the API showing the weight of fresh weight predicted by the CNNs. ', 
              skills: [

                {name: 'Literature Review', group:'Research'},
                {name: 'Project Proposal', group:'Research'},
                {name: 'Innovation', group:'Research'},                
                {name: 'Thesis/Reports/Papers Writing', group:'Research'},
                {name: 'Presentation skills', group:'Research'},
                
                { name: 'Deep Learning', group: 'Machine Learning/AI' },
                { name: 'Convolutional Neural Networks', group: 'Machine Learning/AI' },
                { name: 'PyTorch', group: 'Machine Learning/AI' },
                { name: 'GPU Computing', group: 'Machine Learning/AI'},
                { name: 'Machine Learning/AI', group: 'Machine Learning/AI'},

                { name: 'Agri-Systems Modelling', group: 'Agricultural Engineering'},
                { name: 'Grassland Systems', group: 'Agricultural Engineering'},   
                { name: 'Agricultural Engineering', group: 'Agricultural Engineering'},  
                { name: 'Digital Agriculture', group: 'Digital Agriculture'},             
                

                
                { name: 'Pandas', group: 'Data Handling' },
                { name: 'Numpy', group: 'Data Handling' },
                { name: 'SciPy', group: 'Data Handling' },
                { name: 'Data Augmentation', group: 'Data Handling' },
                { name: 'Data Handling', group: 'Data Handling' },


                { name: 'HTML5', group: 'Front-end' },
                { name: 'CSS3', group: 'Front-end' },
                { name: 'Front-end', group: 'Front-end' },


                { name: 'React', group: 'Web Development' },
                { name: 'Javascript', group: 'Web Development' },
                { name: 'Web Development', group: 'Web Development' },

                { name: 'AWS S3', group: 'Cloud Computing/Infrastructure' },                
                { name: 'Heroku', group: 'Cloud Computing/Infrastructure' },
                { name: 'Cloud Computing/Infrastructure', group: 'Cloud Computing/Infrastructure' },

                { name: 'Flask', group: 'Back-end' },                
                { name: 'Python', group: 'Back-end' },
                { name: 'Back-end', group: 'Back-end' },            

                { name: 'GIT', group: 'System Versioning' }             
                
              ],
            },
            
            
            {
              name: 'GrassLogic',
              owner: 'Felipe Guth',
              private: true,
              startdate: new Date(2019, 9, 1),
              enddate: new Date(2021, 8, 1),
              thumbnail: "https://drive.google.com/uc?id=13gHJ3oLTFTqWIQuV-_PXbyTPyj2kZRrq",
              images:["https://drive.google.com/uc?id=1M4S6hvKM0CUHVsf9xTZNeHHPIMtOdKs7", "https://drive.google.com/uc?id=13gHJ3oLTFTqWIQuV-_PXbyTPyj2kZRrq", 
              "https://drive.google.com/uc?id=1SY1xUbGynX9wIOCkYs-UyRkDsWTUdN62", "https://drive.google.com/uc?id=1jenzUx58BWuVXU4vZchRkYBPcGi0ooVM", "https://drive.google.com/uc?id=1huaKKQoZejcQl45vo2W87ZHSfjLWNmo5"],                
              info: '(Postdoc). The cultivation of grassland in Ireland has been a major economic pillar for thousands of year and nowadays account for the use of 92% of the agricultural land area in the country. In terms of feed for ruminant production systems, the grass is considered to be one of the best options and also the more cost-efficient alternative. In Irish farms, there is significant variability in the production of grass dry matter due to factors such as soil, fertilization and also management. The expansion of dry matter grass productivity is crucial for matching a higher feed demand on farms as the stocking rate rises. Assessing pasture mass is the first step towards effective management decisions such as daily pasture allocation, surplus conservation and supplementary feeding. The current work has proposed a grass growth prediction system that is able to estimate daily quantities of dry matter for individual paddocks based on the canopy, rotation length, weather, location and soil factors. The system makes use of a state-of-the-art based mechanistic model for predictions that are further adjusted by an extra layer of fuzzy logic and other machine learning regression algorithms. Validation was performed with a 28 years period of grass growth ground-truth data, where it was observed the system suitability in the prediction of grass growth throughout the years. This project constitutes a series of computer software developed to model grass growth under commercial farming operations. The program is capable of providing individual paddock calculations for the accumulation and growth of grass for a given date and also for a number of days in the future by using weather forecasts. The model is deployed in 1- An API (application programming interface) on the cloud to receive and handle requests about grass growth calculation for individual paddocks; 2 – GrassLogic Daemon: A cloud daemon server that processes the requests by using the deployed grass growth, mechanistic model. The system uses a structured database (MySQL on AWS cloud) that stores the underlying data received and processed from the API and background Daemon.',
              
              skills: [

                {name: 'Literature Review', group:'Research'},
                {name: 'Project Proposal', group:'Research'},
                {name: 'Innovation', group:'Research'},                
                {name: 'Thesis/Reports/Papers Writing', group:'Research'},
                {name: 'Presentation skills', group:'Research'},

                { name: 'Agri-Systems Modelling', group: 'Agricultural Engineering'},
                { name: 'Grassland Systems', group: 'Agricultural Engineering'},
                { name: 'Grass Growth Models', group: 'Agricultural Engineering'},   

                { name: 'Agricultural Engineering', group: 'Agricultural Engineering'},  
                { name: 'Digital Agriculture', group: 'Digital Agriculture'},          


                {name: 'Fuzzy Logic', group: 'Machine Learning/AI'},
                {name: 'Scikit-Learn', group: 'Machine Learning/AI'},
                {name: 'Data Analysis', group: 'Machine Learning/AI'},

                {name: 'Feature Selection Algorithms', group: 'Machine Learning/AI'},
                {name: 'Feature Engineering', group: 'Machine Learning/AI'},
                {name: 'LASSO', group: 'Machine Learning/AI'},
                {name: 'Linear Regression', group: 'Machine Learning/AI'},
                {name: 'SVN Regression', group: 'Machine Learning/AI'},
                {name: 'Ridge Regression', group: 'Machine Learning/AI'},
                {name: 'KNN', group: 'Machine Learning/AI'},
                {name: 'Ensemble Regression', group: 'Machine Learning/AI'},
                {name: 'Models Generation', group: 'Machine Learning/AI'},
                {name: 'Models Evaluation', group: 'Machine Learning/AI'},
                {name: 'Machine Learning/AI', group: 'Machine Learning/AI'},
                

                { name: 'HTML5', group: 'Front-end' },
                { name: 'CSS3', group: 'Front-end' },
                { name: 'Front-end', group: 'Front-end' },                

                { name: 'Django', group: 'Web Development' },
                { name: 'React', group: 'Web Development' },
                { name: 'Javascript', group: 'Web Development' },
                { name: 'Web Development', group: 'Web Development' },

                { name: 'AWS S3', group: 'Cloud Computing/Infrastructure' },
                { name: 'AWS RDS', group: 'Cloud Computing/Infrastructure' },
                { name: 'Heroku', group: 'Cloud Computing/Infrastructure' },
                { name: 'Cloud Computing/Infrastructure', group: 'Cloud Computing/Infrastructure' },
                
                { name: 'Pandas', group: 'Data Handling' },
                { name: 'Numpy', group: 'Data Handling' },
                { name: 'SQL Queries', group: 'Data Handling' },
                { name: 'Data Handling', group: 'Data Handling' },

                { name: 'MySQL', group: 'Databases' },
                { name: 'Databases Management', group: 'Databases' },                

                { name: 'Flask', group: 'Back-end' },                
                { name: 'Python', group: 'Back-end' },
                { name: 'Back-end', group: 'Back-end' },                

                { name: 'GIT', group: 'System Versioning' }                             
              ],
            },

            {
              name: 'Crop Health Portal',
              owner: 'Felipe Guth',
              private: true,
              thumbnail: "https://drive.google.com/uc?id=1xsZXWqXxeJQi3xg5OATvYVG0tBtwPUBY",
              images: ["https://drive.google.com/uc?id=1xsZXWqXxeJQi3xg5OATvYVG0tBtwPUBY", "https://drive.google.com/uc?id=1ldklgsZ5LmRXnhqaP0Nw1mG42F_kHZm8",
              "https://drive.google.com/uc?id=1isa_JQQMrmdv9qx1bDa_VTJEQWXD4LwD", "https://drive.google.com/uc?id=12OMoXROaeihybas2Wx5zXfAZkYoOu8z6"],
              startdate: new Date(2015, 3, 27),
              enddate: new Date(2019,1,31),
              info: "(PhD). The Crop Health DSS was proposed to deploy a novel and flexible structure that allows for the design of personalized disease risk assessment models, using a fuzzy logic framework, to output the disease risk at a field level. Moreover, this idea was extended to provide a more complete software, where a web system was developed to allow for the creation of a knowledge base to guide disease management programs and deliver crop growth guidelines for final users. Also, a web interface was created to final users register fields, visualize the crop growth and disease assessment guidelines, provide data regarding particular agronomical decisions and visualize the disease risk calculations, accordingly to a model built by a subscribed research institution. It deploys a fuzzy logic framework that allows for the flexible creation of disease risk assessment models to estimate the risk of the diseases at a field level. It provides assessments of disease risk (low, medium and high) using a suite of flexible ‘antecedents’ (e.g. winter weather (viz. weather since sowing), temperature (degree days or equivalent), N application rates, spray use, etc.) that can be created to represent disease-related variables. The combination of the antecedents and their correspondent sets of values can be grouped to deploy models for disease risk calculation. A model deploys a number of customisable rules to map combinations of antecedent sets to deliver the disease risk output (viz. low, medium or high risk of disease occurrence). Project Overview: Admin Portal - Create knowledge base: http://y2u.be/bKAJXOAZa48 ; Admin Portal - Fuzzy Logic Framework: http://y2u.be/gOdzD71T568 ; Crop Health User Portal: http://y2u.be/YaKUVV8mXEo ", 
              
              skills: [
                

                {name: 'Literature Review', group:'Research'},
                {name: 'Project Proposal', group:'Research'},
                {name: 'Innovation', group:'Research'},                
                {name: 'Thesis/Reports/Papers Writing', group:'Research'},
                {name: 'Presentation skills', group:'Research'},

                { name: 'Agri-Systems Modelling', group: 'Agricultural Engineering'},
                { name: 'Crop Science and Production', group: 'Biosystems Engineering'},
                { name: 'Crop Disease Asessment', group: 'Biosystems Engineering'},
                { name: 'Crop Models', group: 'Biosystems Engineering'},
                { name: 'Precision Agriculture', group: 'Biosystems Engineering'},
                { name: 'Biosystems Engineering', group: 'Biosystems Engineering'},


                { name: 'Agricultural Engineering', group: 'Agricultural Engineering'},  
                { name: 'Digital Agriculture', group: 'Digital Agriculture'},             

                
                {name: 'Fuzzy Logic', group: 'Machine Learning/AI'},
                {name: 'Scikit-Learn', group: 'Machine Learning/AI'},
                {name: 'Data Analysis', group: 'Machine Learning/AI'},
                {name: 'Rapid Miner', group: 'Machine Learning/AI'},
                {name: 'Machine Learning/AI', group: 'Machine Learning/AI'},

                {name: 'Entity Relationship Model', group: 'System Engineering'},
                {name: 'UML System Analysis', group: 'System Engineering'},
                {name: 'System Requirements Documentation', group: 'System Engineering'},
                {name: 'System Engineering', group: 'System Engineering'},
                
                { name: 'HTML5', group: 'Front-end' },
                { name: 'CSS3', group: 'Front-end' },
                { name: 'Front-end', group: 'Front-end' },

                { name: 'Django', group: 'Web Development' },
                { name: 'React', group: 'Web Development' },
                { name: 'Javascript', group: 'Web Development'},
                { name: 'Web Development', group: 'Web Development'},

                { name: 'AWS S3', group: 'Cloud Computing/Infrastructure' },
                { name: 'AWS RDS', group: 'Cloud Computing/Infrastructure' },
                { name: 'Heroku', group: 'Cloud Computing/Infrastructure' },
                { name: 'Cloud Computing/Infrastructure', group: 'Cloud Computing/Infrastructure' },
                
                { name: 'Pandas', group: 'Data Handling' },
                { name: 'Numpy', group: 'Data Handling' },
                { name: 'SQL Queries', group: 'Data Handling' },
                { name: 'Data Handling', group: 'Data Handling' },

                { name: 'MySQL', group: 'Databases' },
                { name: 'Databases Management', group: 'Databases' },                 

                { name: 'NodeJS', group: 'Back-end' },
                { name: 'KnexJS', group: 'Back-end' },
                { name: 'Javascript', group: 'Back-end' },
                { name: 'Python', group: 'Back-end' },
                { name: 'Back-end', group: 'Back-end' },

                { name: 'GIT', group: 'System Versioning' },
                
                {name: 'SCRUM', group: 'Project Management'},

              ],
            },
            
            {
                name: 'Deep Learning Disease Monitoring',
                owner: 'Felipe Guth',
                private: true,
                startdate: new Date(2017, 4, 1),
                enddate: new Date(2018, 3, 6),
                thumbnail: "https://drive.google.com/uc?id=1zBqEd1kbEvjJQux5AOSC5mJ5mDqOXYaw",
                images:["https://drive.google.com/uc?id=1zBqEd1kbEvjJQux5AOSC5mJ5mDqOXYaw", "https://drive.google.com/uc?id=1oSHKI8mvHz5hb6keUmWbgJYaJYCiGgNb", 
                "https://drive.google.com/uc?id=1vUbWnYvUFzb4NRhYCIDjwvezjKUZpCVc", "https://drive.google.com/uc?id=1jijEvtqSNgoM2WBIri3EpFTNwYEUIMs_"],                
                info: '(PhD). Wheat historically has been the basic staple food of major civilizations across the world and has occupied large areas of the globally available farming fields. Septoria tritici is a major disease in wheat cultivations that generates yield penalties as high as 50%. The assessment of this disease in winter wheat fields is a key activity to provide valuable information for fungicide spraying and yield loss estimations. Traditional disease quantification is a time-consuming task that relies on trained agronomists scoring capabilities which depending on the size of fields may turn to be impractical. The current study has collected thousands of Red Green Blue (RGB) photographs of winter wheat plots, which presented a considerable variability in management, coupled with disease scores for Septoria contamination. These scores were produced by expert agronomists and used as ground-truth to propose an automated solution for the classification of disease level presence in the crop canopy. Deep convolutional neural networks (CNNs) that have proven their potential in computer vision tasks and in the agronomical field, especially for plant disease detection, were employed for the classification of three disease levels of Septoria (low, medium and high) based on the ground-truth labels. The CNNs (VGG16, GoogleNet, ResNet34, ResNext50) yielded an accuracy up to 92.1% demonstrating the suitability of the proposed method for autonomous disease level quantification using as input RGB images in real field conditions.',
                
                skills: [

                  {name: 'Literature Review', group:'Research'},
                  {name: 'Project Proposal', group:'Research'},
                  {name: 'Innovation', group:'Research'},                
                  {name: 'Thesis/Reports/Papers Writing', group:'Research'},
                  {name: 'Presentation skills', group:'Research'},
                                 
                  { name: 'Crop Disease Asessment', group: 'Biosystems Engineering'},                
                  { name: 'Precision Agriculture', group: 'Biosystems Engineering'},
                  { name: 'Biosystems Engineering', group: 'Biosystems Engineering'},

                  { name: 'Agricultural Engineering', group: 'Agricultural Engineering'},  
                  { name: 'Digital Agriculture', group: 'Digital Agriculture'},             

                  { name: 'Deep Learning', group: 'Machine Learning/AI' },
                  { name: 'Convolutional Neural Networks', group: 'Machine Learning/AI' },
                  { name: 'PyTorch', group: 'Machine Learning/AI' },
                  { name: 'Caffe', group: 'Machine Learning/AI' },
                  { name: 'GPU Computing', group: 'Machine Learning/AI'},
                  { name: 'Machine Learning/AI', group: 'Machine Learning/AI'},
                  
                  { name: 'Pandas', group: 'Data Handling' },
                  { name: 'Numpy', group: 'Data Handling' },
                  { name: 'SciPy', group: 'Data Handling' },
                  { name: 'Data Augmentation', group: 'Data Handling' },
                  { name: 'Data Handling', group: 'Data Handling' },
                  
                  { name: 'Matplotlib', group: 'Data Visualization' },
                  { name: 'Data Visualization', group: 'Data Visualization' },

                  { name: 'Python', group: 'System Development'},                  
                  { name: 'GIT', group: 'System Versioning'},
                  
                ],
              },

              {
                name: 'Winter Wheat Variety Selection Tool',
                owner: 'Felipe Guth',
                private: true,
                startdate: new Date(2016, 4, 1),
                enddate: new Date(2017, 2, 1),
                url: 'https://chvarietyselection.herokuapp.com/',
                thumbnail: "https://drive.google.com/uc?id=1CefhjB_5_QHggxqISOpTTqTXHhFmFFRr",
                images:["https://drive.google.com/uc?id=1CefhjB_5_QHggxqISOpTTqTXHhFmFFRr", "https://drive.google.com/uc?id=1Z1CWWUTXZ-tTDly15ErnboqhTXLcUmhV",
                "https://drive.google.com/uc?id=1Ss9NP0TYOuo9KZ3MkriDsD2kDN-RzkBS", "https://drive.google.com/uc?id=1d6p9EOx9iJ25oyv_P9kydYQ4qKIvWN4F", 
                "https://drive.google.com/uc?id=1e33HetxgA4KGrT_3RRZDCaGySYoq1ant", "https://drive.google.com/uc?id=1TvaB0ol5SIOw4fLD8YqTstBZHWKeZof8"],                
                info: '(PhD). The high number of variables and consequent complex analyses are factors that make the task of selecting a specific crop variety, that best fulfils the particulars of a given farm, a challenging one. In this scenario, this tool delivers a ranking/decision method to deal with the stochastic problem of selecting a winter wheat variety, taking into account the known and random factors that influence the specific decision. The system has access to a database of varieties’ traits and yield performance and evaluates the commercial market s(i.e. product quality), site-specific and agronomic varietal traits needed (e.g. resistance to diseases and lodging) to deliver a list of best winter wheat varieties choices for a particular situation, given the selected importance of each factor.',
                
                skills: [

                  {name: 'Literature Review', group:'Research'},
                  {name: 'Project Proposal', group:'Research'},
                  {name: 'Innovation', group:'Research'},                
                  {name: 'Thesis/Reports/Papers Writing', group:'Research'},
                  {name: 'Presentation skills', group:'Research'},
                
                  { name: 'Agri-Systems Modelling', group: 'Agricultural Engineering'},                  
                  { name: 'Biosystems Engineering', group: 'Biosystems Engineering'},
                  { name: 'Agricultural Engineering', group: 'Agricultural Engineering'},  
                  { name: 'Digital Agriculture', group: 'Digital Agriculture'},             
                  {name: 'Weighting Rank System', group: 'Statiscal Modelling'},
                    
                  { name: 'HTML5', group: 'Front-end' },
                  { name: 'CSS3', group: 'Front-end' }, 
                  { name: 'Front-end', group: 'Front-end' },               

                  // { name: 'Django', group: 'Web Development' },
                  { name: 'React', group: 'Web Development' },
                  { name: 'Javascript', group: 'Web Development' },
                  { name: 'Web Development', group: 'Web Development' },
                
                  { name: 'AWS RDS', group: 'Cloud Computing/Infrastructure' },
                  { name: 'Heroku', group: 'Cloud Computing/Infrastructure' },  
                  { name: 'Cloud Computing/Infrastructure', group: 'Cloud Computing/Infrastructure' },                
            
                  { name: 'JSON', group: 'Data Handling' },
                  { name: 'SQL Queries', group: 'Data Handling' },
                  { name: 'Data Handling', group: 'Data Handling' },

                  { name: 'Data Visualization Libraries', group: 'Data Visualization'},
                  { name: 'Data Visualization', group: 'Data Visualization' },
                  
                  { name: 'MySQL', group: 'Databases' },     
                  { name: 'Databases Management', group: 'Databases' },            

                  { name: 'NodeJS', group: 'Back-end' },
                  { name: 'NPM', group: 'Back-end' },
                  { name: 'Javascript', group: 'Back-end' },
                  { name: 'Back-end', group: 'Back-end' },
                  
                  { name: 'Matlab', group: 'Sientific Development/Prototyping' },

                  { name: 'GIT', group: 'System Versioning' },
                ],
              },

              {
                name: 'AI for Trading (Udacity)',
                owner: 'Felipe Guth',
                private: false,                
                startdate: new Date(2019, 2, 1),
                enddate: new Date(2019, 7, 1),
                url: 'https://github.com/felipeguth/AIforTrading',
                thumbnail: "https://drive.google.com/uc?id=19MyK77d2ULtrBfrvG78fbQ7drZW5UfRU",
                info: 'Practical course of quantitative analysis, including data processing, trading signal generation, and portfolio management. Python scripts were applied to work with historical stock data, develop trading strategies, and construct a multi-factor model with optimization.',
                skills: [

                  {name: 'Compute Returns', group: 'Algorithmic Trading' },
                  {name: 'Trading with Momentum', group: 'Algorithmic Trading' },
                  {name: 'Breakout Strategy', group: 'Algorithmic Trading' },
                  {name: 'Smart Beta Porfolio', group: 'Algorithmic Trading' },
                  {name: 'Porfolio Optimization', group: 'Algorithmic Trading' },
                  {name: 'Multi Factor Trading Model', group: 'Algorithmic Trading' },
                  {name: 'Algorithmic Trading', group: 'Algorithmic Trading' },                  

                  {name: 'Statistical Significance Tests', group: 'Statistics' },
                  {name: 'Signal Analysis', group: 'Statistics'},
                  {name: 'Bayesian Statistics', group: 'Statistics'},
                  {name: 'Statistics', group: 'Statistics'},

                  { name: 'Python', group: 'System Development' },
                  { name: 'System Development', group: 'System Development' },


                  { name: 'Pandas', group: 'Data Handling' },
                  { name: 'Numpy', group: 'Data Handling' },
                  { name: 'SciPy', group: 'Data Handling' }, 
                  { name: 'Data Handling', group: 'Data Handling' },     
                  
                  { name: 'GIT', group: 'System Versioning' },
              
                ],
              },  

              {
                name: 'Python for Financial Analysis and Algorithmic Trading (Udemy)',
                owner: 'Felipe Guth',
                private: false,                
                startdate: new Date(2018, 2, 1),
                enddate: new Date(2018, 6, 1),
                url: 'https://github.com/felipeguth/PythonFinanceAnalysis',
                thumbnail: "https://drive.google.com/uc?id=1uJAREvMCNVJpEw2qkVXSUIAAO0xJ0cgx",
                info: 'Practical course for financial analysis and algorithmic trading covering the aspects of Python Fundamentals, NumPy for High-Speed Numerical Processing, Pandas for Efficient Data Analysis, Matplotlib for Data Visualization, Using pandas-datareader and Quandl for data ingestion, Pandas Time Series Analysis Techniques, Stock Returns Analysis, Cumulative Daily Returns, Volatility and Securities Risk, EWMA (Exponentially Weighted Moving Average), Statsmodels, ETS (Error-Trend-Seasonality), ARIMA (Auto-regressive Integrated Moving Averages), Auto Correlation Plots and Partial Auto Correlation Plots, Sharpe Ratio, Portfolio Allocation Optimization, Efficient Frontier and Markowitz Optimization, Types of Funds, Order Books, Short Selling, Capital Asset Pricing Model, Stock Splits and Dividends, Efficient Market Hypothesis, Algorithmic Trading with Quantopian and Futures Trading.',
                skills: [

                  {name: 'Compute Returns', group: 'Algorithmic Trading' },
                  {name: 'Cumulative Returns', group: 'Algorithmic Trading' },
                  {name: 'Multi Factor Trading Model', group: 'Algorithmic Trading' },  
                  {name: 'Efficient Market Hypothesis', group: 'Algorithmic Trading' },
                  {name: 'Quantopian', group: 'Algorithmic Trading' },                
                  {name: 'Markowitz Optimization', group: 'Algorithmic Trading' },
                  {name: 'Algorithmic Trading', group: 'Algorithmic Trading' },

                  {name: 'Statistical Significance Tests', group: 'Statistics' },
                  {name: 'ARIMA', group: 'Statistics' },
                  {name: 'Statistics', group: 'Statistics' },                 

                  { name: 'Python', group: 'System Development' },

                  { name: 'Pandas', group: 'Data Handling' },
                  { name: 'Numpy', group: 'Data Handling' },
                  { name: 'SciPy', group: 'Data Handling' },  
                  { name: 'Data Handling', group: 'Data Handling' },   

                  { name: 'Matplotlib', group: 'Data Visualization' },  
                  { name: 'Data Visualization', group: 'Data Visualization' },   

                  { name: 'GIT', group: 'System Versioning' },

              
                ],
              },  

              {
                name: 'Probabilistic EKF SLAM',
                owner: 'FURG',
                private: true,                
                startdate: new Date(2012, 6, 1),
                enddate: new Date(2014, 3, 1),

                thumbnail: "https://drive.google.com/uc?id=1CzHecwDMAX69rmbiufTllg_s0IHJOjen",
                images:["https://drive.google.com/uc?id=1BSWhwtwGAPJR33ITZIyT1OoujrIuebxM", "https://drive.google.com/uc?id=1LkC6a5aGaKEDVzL3RMvWE0Po7M8Yppys", " https://drive.google.com/uc?id=1eFMl9ZMw9BEv1ZgQ5Nts8BLzeHtpbsKM", 
                "https://drive.google.com/uc?id=1XAH7c5-4BXW8zSzsVu_U4IvU_SuiY_38", "https://drive.google.com/uc?id=1n55j6aC6pn0_xZdXjcHMCnWR7DU31xD9", "https://drive.google.com/uc?id=1oURN3Q1FXTIwSZCvB-JgZZKQA_CljH6V", 
                "https://drive.google.com/uc?id=1CzHecwDMAX69rmbiufTllg_s0IHJOjen", "https://drive.google.com/uc?id=1n_AtsA3XOWrvjK0P2S9o60W8vDVY6lhg"],                
                info: 'The unstructured environment,  imprecise sensors, the difficulty of obtaining features,  besides the impossibility of using  GPS  signals,  are some of the challenges encountered in underwater environments. In this adverse context,  Simultaneous Localization and Mapping (SLAM) techniques are employed to locate the robot in an efficient way in an unknown environment, while creating a representative model of this environment at the same time.  This work addresses the main topics related to SLAM applications in underwater environments. A system for treating the problem of SLAM based on Extended Kalman Filter (EKF) is proposed. The proposed method employs a new technique for extracting features of sonar, based on filtering algorithms from computer vision, in a context where the voting neighbourhood of local maxima is also affected with the purpose of modelling the uncertainty of acoustic returns. The results of the proposed system, through a case study that uses real inertial sensor data and a sonar embedded in a robot that travelled a path from about 600m in an abandoned marina are presented. The trajectory generated by the SLAM system is compared to the ground truth data acquired with a DGPS that provides an accuracy of about 2m.',
                skills: [

                  {name: 'Literature Review', group:'Research'},
                  {name: 'Project Proposal', group:'Research'},
                  {name: 'Innovation', group:'Research'},                
                  {name: 'Thesis/Reports/Papers Writing', group:'Research'},
                  {name: 'Presentation skills', group:'Research'},
                  
                  { name: 'Probabilistic Robotics', group: 'Robotics' },                
                  { name: 'Simultaneous Localization and Mapping', group: 'Robotics' },
                  { name: 'Underwater Robotics', group: 'Robotics' },                
                  { name: 'Sensor Fusion', group: 'Robotics' },
                  { name: 'Extended Kalman Filter', group: 'Robotics' },
                  { name: 'Particle Filters', group: 'Robotics' },
                  { name: 'Sonar data processing', group: 'Robotics' },
                  { name: 'Robotics', group: 'Robotics' },             

                  { name: 'Signal Filtering', group: 'Computer Vision' },
                  { name: 'Image Filtering', group: 'Computer Vision' },
                  { name: 'Computer Vision', group: 'Computer Vision' },

                  { name: 'Matlab', group: 'Sientific Development/Prototyping' },
                  { name: 'GIT', group: 'System Versioning' },
                ],
              },  

              {
                name: 'Bio-Inspired Robotic SLAM',
                owner: 'FURG',
                private: false,
                url: 'https://github.com/felipeguth/dolphin_slam',
                startdate: new Date(2011, 10, 1),
                enddate: new Date(2014, 1, 1),

                thumbnail: "https://drive.google.com/uc?id=17QFutaXKaCTCo4Ib2WkRlrB0X5seozth",
                images:["https://drive.google.com/uc?id=17QFutaXKaCTCo4Ib2WkRlrB0X5seozth", "https://drive.google.com/uc?id=1t1NrRyxJaGa4JKxnu8qypjbsr-DS0Zot", 
                "https://drive.google.com/uc?id=1gllk336JXpwG7EwTVPkvhw6YKguCEFKd", "https://drive.google.com/uc?id=1pbyDS3_6YHh4XvO0xuvK1P0V1GP6hMck"],                
                info: 'Assistant researcher member of the team that proposed a new bio-inspired Simultaneous Localization and Mapping (SLAM) approach to deal with the localization and spatial mapping problem, extending the successful previous RatSLAM approach from 2D ground vehicles to the 3D underwater environments. Our approach is a SLAM system based on mammals navigation using place and grid cells. Experiments in simulation and real environments were conducted involving long-term navigation tasks with different robots and sensors. The proposal is open-source, being integrated with the Robot Operating System (ROS).',
                skills: [

                  {name: 'Literature Review', group:'Research'},
                  {name: 'Project Proposal', group:'Research'},
                  {name: 'Innovation', group:'Research'},                
                  {name: 'Thesis/Reports/Papers Writing', group:'Research'},
                  {name: 'Presentation skills', group:'Research'},
                  
                  { name: 'Bio-Inspired Robotics', group: 'Robotics' },
                  { name: 'RatSLAM', group: 'Robotics' },
                  { name: 'Simultaneous Localization and Mapping', group: 'Robotics' },
                  { name: 'ROS', group: 'Robotics' },
                  { name: 'Sensor Fusion', group: 'Robotics' },
                  { name: 'Underwater Robotics', group: 'Robotics' },                
                  { name: 'ROV Operation', group: 'Robotics' },
                  { name: 'Robotics', group: 'Robotics' },                    
                  
                  { name: 'C++', group: 'System Development' },
                  { name: 'Matlab', group: 'Sientific Development/Prototyping' },

                  { name: 'GIT', group: 'System Versioning' },
                ],
              },  

              {
                name: 'Computer Vision Food Recognition',
                owner: 'Felipe Guth',
                private: false,
                url: 'https://github.com/felipeguth/foodrecogniction',
                startdate: new Date(2013, 5, 1),
                enddate: new Date(2013, 8, 1),

                thumbnail: "https://drive.google.com/uc?id=1hODX85_Es3XJqVBmOQyjB7CGJFcASUhL",                                
                info: 'Project that made use of a large public food database to extract bag-of-words descriptors and train an SVM algorithm in order to classify multi-classes of food types. ',
                skills: [
                  
                  { name: 'SVM', group: 'Machine Learning/AI'},
                  { name: 'Bag-of-Words', group: 'Machine Learning/AI'},
                  { name: 'Classification', group: 'Machine Learning/AI'},
                  { name: 'Machine Learning/AI', group: 'Machine Learning/AI'},
                  
                  { name: 'OpenCV', group: 'Computer Vision'},
                  { name: 'Computer Vision', group: 'Computer Vision'},
                 
                  
                  { name: 'C++', group: 'System Development' },
                  { name: 'Matlab', group: 'Sientific Development/Prototyping' },

                  { name: 'GIT', group: 'System Versioning' },
                ],
              },
              
              {
                name: 'Self-Driving Car (Udacity)',
                owner: 'Felipe Guth',
                private: false,
                url: 'https://github.com/felipeguth/udacity_autonomous_car',
                startdate: new Date(2012, 9, 1),
                enddate: new Date(2013, 3, 1),
                thumbnail: "https://drive.google.com/uc?id=1ZSuz-aHMTVahNkQ6yLOdOcumZuv9qPIM",
                images:["https://drive.google.com/uc?id=1molmYq28w2xN-GDHMaO_3dnGdrKb4wia", "https://drive.google.com/uc?id=10O-13bIIdAVX4Zo8qn31wC3PZo4oGZLm", 
                "https://drive.google.com/uc?id=1aU6Jv3SIY5ZOwuUCgdgh4JZ9tuqeUreV", "https://drive.google.com/uc?id=1ZSuz-aHMTVahNkQ6yLOdOcumZuv9qPIM" ],                                
                info: 'Udacity course for the implementation of a simultaneous localization and mapping system for autonomous car prototyping. The project explains important concepts of probabilistic robotics and machine learning such as bayesian logic, Kalman filtering, particle filters, a-star search, PID control and SLAM that were demonstrated in practice by using a sample dataset from motion sensors and laser scanners coupled to a robotic car.',
                skills: [


                  { name: 'Localization', group: 'Robotics' },  
                  { name: 'Markov Localization', group: 'Robotics' },  
                  { name: 'Probabilities', group: 'Statistics' },  
                  { name: 'Bayes Rule', group: 'Statistics' },  
                  { name: 'Total Probability', group: 'Statistics' },
                  { name: 'Statistics', group: 'Statistics' },  
                  
                  { name: 'Particle Filters', group: 'Robotics' },  
                  { name: 'Kalman Filters', group: 'Robotics' },  

                  { name: 'Motion Planning', group: 'Robotics' },  
                  { name: 'A Star Search', group: 'Robotics' },  
                  { name: 'Dynamic Programming', group: 'Robotics' },  
                  { name: 'Robot Motion', group: 'Robotics' },  
                  { name: 'PID Control', group: 'Robotics' },
                  { name: 'Localization', group: 'Robotics' },
                  { name: 'Navigation', group: 'Robotics' },
                  { name: 'Sensor Fusion', group: 'Robotics' },
                  { name: 'Simultaneous Localization and Mapping', group: 'Robotics' },
                  { name: 'Robotics', group: 'Robotics' },  
                  
                  { name: 'Python', group: 'System Development' },                  
                
                  { name: 'GIT', group: 'System Versioning' },
                ],
              },  



          ],
          roles: [

            {
              title: 'Newman Postdoctoral Scholar',
              company: 'University College Dublin',
              location: 'Dublin, Ireland',
              url: 'https://www.ucdfoundation.ie/',
              startdate: new Date(2019, 8, 1),
              enddate: new Date(2021, 7, 1),
              info: "Origin Enterprises Newman Fellow in Agri-systems Modelling."
            },
            {
              title: 'International Science Without Borders Scholar',
              company: 'CNPQ-BR',
              location: 'Dublin, Ireland',
              startdate: new Date(2015, 3, 28),
              enddate: new Date(2019, 1, 31),
              info: "Research member of the School of Biosystems Engineering at University College Dublin."
            },
            {
              title: 'Assistant Teacher Intern',
              company: 'Federal University of Rio Grande',
              location: 'Rio Grande, RS, Brazil',
              startdate: new Date(2014, 2, 1),
              enddate: new Date(2014, 6, 28),
              info: "40 hs - Teaching internship in Computer Engineering for the module of Artificial Intelligence and Robotics."
            },
            {
              title: 'Research and Innovation Graduate Scholar',
              company: 'Capes-BR',
              location: 'Rio Grande, RS, Brazil',
              startdate: new Date(2012, 3, 1),
              enddate: new Date(2014, 2, 28),
              info: "Research member of the Group of Automation and Intelligent Robotics - NAUTEC at the Federal University of Rio Grande."
            },

            {
              title: 'Software Analyst and Developer',
              company: 'Migrate Company',
              location: 'Três de Maio, RS, Brazil',
              startdate: new Date(2008, 6, 25),
              enddate: new Date(2011, 6, 25),              
              info: "Member of the development team for the e-invoice platform which connected companies selling points into the generation of federal signed and validated electronic invoices documents which became one of the main platforms used in Brazil. Functions included system analysis and requirements documentation, database modelling, software development (Genexus) and system testing activities. Projects were managed using SCRUM, PMI and CMMI.",
            },
            
           
            
            


          ],
          qualifications: [
            {
              name: 'Postdoctor in Agri-Systems Modelling',
              location: 'University College Dublin - Ireland ',
              startdate: new Date (2019, 8, 1),
              enddate: new Date (2021, 7, 1),
            },
            {
              name: 'PhD in Biosystems Engineering',
              location: 'University College Dublin - Ireland ',                
              startdate: new Date (2015, 8, 1),
              enddate: new Date (2019, 7, 1),
            },
            {
              name: 'Master in Computer Engineering',
              location: 'Federal University of Rio Grande (FURG) - Brazil',
              startdate: new Date (2012, 8, 1),
              enddate: new Date (2014, 7, 1),
            },
            {
              name: 'Bachelor of Science in Information Systems',
              location: 'Tres de Maio University - Brazil',
              grade: 'First Class Honours',
              startdate: new Date (2006, 8, 1),
              enddate: new Date (2010, 7, 1),
            }            
          ],

          skills: [            

            {name: 'Literature Review', group:'Research', level: 90},
            {name: 'Project Proposal', group:'Research', level: 80},
            {name: 'Innovation', group:'Research', level: 90},                
            {name: 'Thesis/Reports/Papers Writing', group:'Research', level: 80},
            {name: 'Presentation skills', group:'Research', level: 70},

            { name: 'Python', group: 'Programming', level: 90 },
            { name: 'Javascript', group: 'Programming', level: 70 },
            { name: 'C++', group: 'Programming', level: 30 },
            { name: 'Matlab', group: 'Programming', level: 80 },
            { name: 'Solidity', group: 'Programming', level: 50},


            { name: 'Machine Learning/AI', group: 'Machine Learning/AI/Robotics', level: 80},
            { name: 'Statistics', group: 'Machine Learning/AI/Robotics', level: 60},
            { name: 'Fuzzy Logic', group: 'Machine Learning/AI/Robotics', level: 80},
            { name: 'Deep Learning', group: 'Machine Learning/AI/Robotics', level: 80},
            { name: 'Convolutional Neural Networks', group: 'Machine Learning/AI/Robotics', level: 80},
            { name: 'PyTorch', group: 'Machine Learning/AI/Robotics', level: 75},
            { name: 'Scikit-Learn', group: 'Machine Learning/AI/Robotics', level: 75},
            { name: 'Computer Vision', group: 'Machine Learning/AI/Robotics', level: 60},
            { name: 'Underwater Robotics', group: 'Machine Learning/AI/Robotics', level: 65},
            { name: 'Simultaneous Localization and Mapping', group: 'Machine Learning/AI/Robotics', level: 85},
            { name: 'Sensor Fusion', group: 'Machine Learning/AI/Robotics', level: 70},
            { name: 'Bio-Inspired Robotics', group: 'Machine Learning/AI/Robotics', level: 70},
            { name: 'ROS', group: 'Machine Learning/AI/Robotics', level: 60},

            
            { name: 'React', group: 'API/Web Development', level: 75 },
            { name: 'Django', group: 'API/Web Development', level: 70 },
            { name: 'HTML5', group: 'API/Web Development', level: 70 },
            { name: 'CSS3', group: 'API/Web Development', level: 60 },
            { name: 'Back-end', group: 'API/Web Development', level: 60 },
            { name: 'Flask', group: 'API/Web Development', level: 70 },

            { name: 'SQL Queries', group: 'Data Related', level: 85 },
            { name: 'Data Handling', group: 'Data Related', level: 80 },
            { name: 'Data Visualization', group: 'Data Related', level: 70 },
            { name: 'JSON', group: 'Data Related', level: 85 },


            { name: 'Databases Management', group: 'Databases/Infrastructure', level: 70 },
            { name: 'Cloud Computing/Infrastructure', group: 'Databases/Infrastructure', level: 60 },
            { name: 'MySQL', group: 'Databases/Infrastructure', level: 75 },
            { name: 'AWS RDS', group: 'Databases/Infrastructure', level: 75 },


            { name: 'Agricultural Engineering', group: 'Agri-Tech', level: 75 },
            { name: 'Agri-Systems Modelling', group: 'Agri-Tech', level: 85 },
            { name: 'Biosystems Engineering', group: 'Agri-Tech', level: 75 },
            { name: 'Crop Science and Production', group: 'Agri-Tech', level: 70 },
            { name: 'Crop Disease Asessment', group: 'Agri-Tech', level: 80 },
            { name: 'Digital Agriculture', group: 'Agri-Tech', level: 85 },

            { name: 'UML System Analysis', group: 'Software Engineering/Project Management', level: 85},
            { name: 'Entity Relationship Model', group: 'Software Engineering/Project Management', level: 80},
            { name: 'System Requirements Documentation', group: 'Software Engineering/Project Management', level: 85},
            { name: 'System Engineering', group: 'Software Engineering/Project Management', level: 85},
            { name: 'SCRUM', group: 'Software Engineering/Project Management', level: 75},

            { name: 'Algorithmic Trading', group: 'Algo/Quantitative Trading/Blockchain', level: 60},
            { name: 'Trading with Momentum', group: 'Algo/Quantitative Trading/Blockchain', level: 50}, 
            { name: 'Porfolio Optimization', group: 'Algo/Quantitative Trading/Blockchain', level: 50}, 
            { name: 'Multi Factor Trading Model', group: 'Algo/Quantitative Trading/Blockchain', level: 50}, 
            { name: 'Blockchain Development', group: 'Algo/Quantitative Trading/Blockchain', level: 60}, 
            { name: 'Smart Contracts', group: 'Algo/Quantitative Trading/Blockchain', level: 65},
            
            { name: 'GIT', group: 'System Versioning', level: 75},

          ],
        }
      }
        page={{
          textColour: '#F44E3B',
          bgColour: '#21130d',
          footerRContent:<p></p>,
          sections: [
            {
              identifier: 'Projects',
              title: 'Projects',
              subTitle: 'List of selected projects. Select a Project for more information.',
              systemUse: 'projects',
            },
            {
              identifier: 'Experience',
              title: 'Experience',
              subTitle: 'Professional and Academic Experience.',
              bgColour: '#f6f6f6',
              systemUse: 'experience'
            },
            {
              identifier: 'Qualifications',
              title: 'Education',
            //   subTitle: 'My academic qualifications.',
              systemUse: 'qualifications'
            },
            {
              identifier: 'Skills',
              title: 'Skills',
              subTitle: 'My key skills and technologies.\n\r\nClick on a technology to show projects that use it.',
              bgColour: '#f6f6f6',
              systemUse: 'skills'
            },
            {
              identifier: 'Intelectual Property',
              title: 'Intelectual Property',
              // bgColour: '#f6f6f6',
              content: (
                <div className='listitems'>
                  <ItemList listV={IntelPropItems}/> 
                </div>
              )
            },
            {
              identifier: 'Selected Pubs',
              title: 'Selected Pubs',
              bgColour: '#f6f6f6',
              content: (
                <div className='listpubli'>
                  <PubList listV={Publications}/>
                </div>
              )
            },
            {
              identifier: 'About',
              title: 'About',
              content: (
                <div className='listpubli'>
                  <p>{about}</p>
                </div>
              )
            },
          ],
        }} 
      />
    )
  }
}

export default DevHome;