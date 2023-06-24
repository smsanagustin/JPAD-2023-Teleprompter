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
    'asd': {
        title: '',
        image: <img src = ''/>,
        description: ''
    }
}


export {TAB_NAMES, MODAL, MODES, FONT_SIZE_LIMITS, SCROLL_SPEED_LIMITS, FONTS, COLORS, AI_REWRITE_OPTIONS}