import React from "react";

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

const AI_REWRITE_OPTIONS = {
    'poem': {
        title: 'Poem',
        image: <img src = ''/>,
        description: 'Poem desc.',
        prompt: ''
    },
    'conversational': {
        title: 'Conversational',
        image: <img src = ''/>,
        description: 'Conversational desc',
        prompt: ''
    },
    'newsAnchor': {
        title: 'News Anchor',
        image: <img src = ''/>,
        description: 'News Anchor desc',
        prompt: ''
    },
    'funny': {
        title: 'Funny',
        image: <img src = ''/>,
        description: 'Funny desc',
        prompt: ''
    },
    'promotional': {
        title: 'Promotional',
        image: <img src = ''/>,
        description: 'Promotional desc',
        prompt: ''
    },
    'storytelling': {
        title: 'Storytelling',
        image: <img src = ''/>,
        description: 'Storytelling desc',
        prompt: ''
    },
    'informative': {
        title: 'Informative',
        image: <img src = ''/>,
        description: 'Informative desc',
        prompt: ''
    },
    'inspirational': {
        title: 'Inspirational',
        image: <img src = ''/>,
        description: 'Inspirational desc',
        prompt: ''
    },
    'analytical': {
        title: 'Analytical',
        image: <img src = ''/>,
        description: 'Analytical desc',
        prompt: ''
    },
    'persuasive': {
        title: 'Persuasive',
        image: <img src = ''/>,
        description: 'Persuasive desc',
        prompt: ''
    },
}

export {TAB_NAMES, MODAL, MODES, FONT_SIZE_LIMITS, SCROLL_SPEED_LIMITS, FONTS, COLORS, AI_REWRITE_OPTIONS}