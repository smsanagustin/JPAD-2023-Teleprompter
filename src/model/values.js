import React from "react";
import undraw_conference_speaker_re_1rna from '../assets/images/undraw_conference_speaker_re_1rna.svg'
import undraw_happy_music_g6wc from '../assets/images/undraw_happy_music_g6wc.svg'
import undraw_happy_news_re_tsbd from '../assets/images/undraw_happy_news_re_tsbd.svg'
import undraw_marketing_re_7f1g from '../assets/images/undraw_marketing_re_7f1g.svg'
import undraw_presentation_re_sxof from '../assets/images/undraw_presentation_re_sxof.svg'
import undraw_candidate_ubwv from '../assets/images/undraw_candidate_ubwv.svg'
import undraw_fall_thyk from '../assets/images/undraw_fall_thyk.svg'
import undraw_conversation_re_c26v from '../assets/images/undraw_conversation_re_c26v.svg'
import undraw_the_world_is_mine_re_j5cr from '../assets/images/undraw_the_world_is_mine_re_j5cr.svg'
import undraw_tutorial_video_re_wepc from '../assets/images/undraw_tutorial_video_re_wepc.svg'



const TAB_NAMES = {
    'write': 'Write',
    'teleprompter': 'Teleprompter',
    'defaultval': "Write"
}

const MODAL = {
    'writeWithAi': 'writeWithAi',
    'hidden': 'hidden',
}

const MODES = {
    'timed': "Timed",
    'manual': "Manual",
    'defaultval': 'Timed',
};

const FONT_SIZE_LIMITS = {
    min: 12,
    max: 1000,
    'defaultval': 80
};

const SCROLL_SPEED_LIMITS = {
    min: 1,
    max: 100,
    'defaultval': 10
};

const FONTS = {
    // insert font objects

    'defaultval': {name: '', src: ''}
};

const COLORS = {
    // insert color objects

    'BLACK': {name: '', src: ''}
};

const AI_PROMPT_GENERAL_INSTRUCTIONS = {
    'prefix': 'You will take a message from the user and convert that message into a writing style below. Implement the best practices in writing. Don\'t reply anything else just the converted writing style.\nWriting stile:\n\n',
    'postfix': '',
}

const AI_REWRITE_OPTIONS = {
    'poem': {
        title: 'Poem',
        image: <img src = {undraw_conference_speaker_re_1rna}/>,
        description: '',
        prompt: AI_PROMPT_GENERAL_INSTRUCTIONS.prefix + 
            'Poem.\n\n' + 
            'A poem is a form of creative writing that uses language in a rhythmic and aesthetic way, often with rhyme, imagery, metaphor and other literary devices. To write a poem, you should:\n' +
            '- Choose a theme or topic for your poem\n' +
            '- Decide on the tone and mood of your poem\n' +
            '- Pick a form or structure for your poem, such as free verse, sonnet, haiku, etc.\n' +
            '- Use words that convey your message and emotions\n' +
            '- Experiment with sound, rhythm and rhyme schemes\n' +
            '- Use figurative language, such as similes, metaphors, personification, etc.\n' +
            '- Revise and polish your poem\n' +
            AI_PROMPT_GENERAL_INSTRUCTIONS.postfix
    },
    'conversational': {
        title: 'Conversational',
        image: <img src = {undraw_conversation_re_c26v}/>,
        description: '',
        prompt: AI_PROMPT_GENERAL_INSTRUCTIONS.prefix + 
            'Conversational.\n\n' + 
            AI_PROMPT_GENERAL_INSTRUCTIONS.postfix
    },
    'newsAnchor': {
        title: 'News Anchor',
        image: <img src = {undraw_tutorial_video_re_wepc}/>,
        description: '',
        prompt: AI_PROMPT_GENERAL_INSTRUCTIONS.prefix + 
            'News Anchor.\n\n' + 
            AI_PROMPT_GENERAL_INSTRUCTIONS.postfix
    },
    'funny': {
        title: 'Funny',
        image: <img src = {undraw_happy_music_g6wc}/>,
        description: '',
        prompt: AI_PROMPT_GENERAL_INSTRUCTIONS.prefix + 
            '' + 
            AI_PROMPT_GENERAL_INSTRUCTIONS.postfix
    },
    'promotional': {
        title: 'Promotional',
        image: <img src = {undraw_happy_news_re_tsbd}/>,
        description: '',
        prompt: AI_PROMPT_GENERAL_INSTRUCTIONS.prefix + 
            '' + 
            AI_PROMPT_GENERAL_INSTRUCTIONS.postfix
    },
    'storytelling': {
        title: 'Storytelling',
        image: <img src = {undraw_fall_thyk}/>,
        description: '',
        prompt: AI_PROMPT_GENERAL_INSTRUCTIONS.prefix + 
            '' + 
            AI_PROMPT_GENERAL_INSTRUCTIONS.postfix
    },
    'informative': {
        title: 'Informative',
        image: <img src = {undraw_presentation_re_sxof}/>,
        description: '',
        prompt: AI_PROMPT_GENERAL_INSTRUCTIONS.prefix + 
            '' + 
            AI_PROMPT_GENERAL_INSTRUCTIONS.postfix
    },
    'inspirational': {
        title: 'Inspirational',
        image: <img src = {undraw_the_world_is_mine_re_j5cr}/>,
        description: '',
        prompt: AI_PROMPT_GENERAL_INSTRUCTIONS.prefix + 
            '' + 
            AI_PROMPT_GENERAL_INSTRUCTIONS.postfix
    },
    'analytical': {
        title: 'Analytical',
        image: <img src = {undraw_marketing_re_7f1g}/>,
        description: '',
        prompt: AI_PROMPT_GENERAL_INSTRUCTIONS.prefix + 
            '' + 
            AI_PROMPT_GENERAL_INSTRUCTIONS.postfix
    },
    'persuasive': {
        title: 'Persuasive',
        image: <img src = {undraw_candidate_ubwv}/>,
        description: '',
        prompt: AI_PROMPT_GENERAL_INSTRUCTIONS.prefix + 
            '' + 
            AI_PROMPT_GENERAL_INSTRUCTIONS.postfix
    },
}

export {TAB_NAMES, MODAL, MODES, FONT_SIZE_LIMITS, SCROLL_SPEED_LIMITS, FONTS, COLORS, AI_REWRITE_OPTIONS}