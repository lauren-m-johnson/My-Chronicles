const express = require('express');
const router = express.Router();

// Prompts and function for displaying random writing prompt in entry form
const prompts = [
    'Describe a recent experience that made you feel grateful.',
    `Write about a goal you have for the next year and the steps you'll take to achieve it.`,
    'Reflect on a time when you faced a challenge and how you overcame it.',
    'Write about a book, movie, or artwork that has deeply impacted you and explain why.',
    'Describe your ideal day from start to finish. What would you do, who would you spend it with?',
    'Write a letter to your future self, detailing your hopes and aspirations.',
    `Reflect on a mistake you've made and what you learned from it.`,
    'Write about a person who has had a significant influence on your life and explain why.',
    `Describe a place you've always wanted to visit and why it holds meaning to you.`,
    'Write about a fear or insecurity you have and explore ways to overcome it.',
    'Reflect on a memorable childhood event and its lasting impact on you.',
    'Write about a hobby or activity that brings you joy and describe why you love it.',
    'Describe a personal value or belief that is important to you and explain its significance.',
    'Reflect on a difficult decision you had to make and how you arrived at your choice.',
    'Write about a time when you felt proud of yourself and what you accomplished.',
    `Describe a dream or aspiration you've had and discuss the steps you'll take to pursue it.`,
    'Reflect on a relationship that has changed your perspective or taught you valuable lessons.',
    'Write about a place in nature that brings you peace and describe its impact on you.',
    `Describe a challenge you're currently facing and brainstorm potential solutions.`,
    'Reflect on a recent setback or failure and discuss what you learned from the experience.',
    'Explore a childhood fear or traumatic experience that still influences you today. How does it manifest in your life, and how can you work through it?',
    'Reflect on a recurring negative pattern or behavior in your life. What do you believe is the underlying shadow aspect that fuels this pattern? How can you bring awareness to it and work on healing?',
    'Write about a person or situation that triggers strong negative emotions within you. What aspects of yourself do you see mirrored in this triggering experience?',
    'Explore a limiting belief or self-sabotaging thought pattern you hold about yourself. Where did it originate, and how can you challenge and transform it?',
    'Reflect on a part of yourself that you often criticize or reject. How can you begin to embrace and integrate this shadow aspect into your sense of self?',
    'Write about a mistake or regret from your past. What lessons can you learn from this experience, and how can you use it as an opportunity for growth and self-compassion?',
    'Explore your relationship with anger. How do you express or suppress it? Are there any unresolved or unexpressed anger that needs your attention and healing?',
    'Reflect on a judgment or prejudice you hold towards others. How might this judgment reflect an unacknowledged aspect of yourself that needs exploration?',
    'Write about a secret or hidden desire that you have kept buried. What fears or shame might be associated with this desire, and how can you bring it into the light and work towards fulfilling it in a healthy way?',
    'Explore a situation where you felt betrayed or hurt by someone close to you. How might you have contributed to this situation or attracted it into your life? What boundaries can you establish to prevent similar experiences in the future?',
    'Free Write. Write about whatever comes to mind today',
    'Free Write. Write about whatever comes to mind today',
    'Free Write. Write about whatever comes to mind today',
    'Free Write. Write about whatever comes to mind today',
    'Free Write. Write about whatever comes to mind today',
  ];

  function getRandomPrompt() {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    return prompts[randomIndex];
  }

  // Route to show random prompt in entry form
  router.get('/', (req, res) => {
    const randomPrompt = getRandomPrompt();
    res.render('/show', { randomPrompt });
  });

  module.exports = {
    getRandomPrompt,
    router
  }
  
