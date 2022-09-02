import waldoCharacterImage from '../images/wald-character.png'
import odlawCharacterImage from '../images/odlaw-character.png'
import wizardCharacterImage from '../images/wizard-test.png'
import classNames from 'classnames'

import React from 'react'

function CharacterImages({ foundCharacter }) {
    const waldoClass = classNames({
        'waldo--faded': foundCharacter.waldo,
    })
    const odlawClass = classNames({
        'odlaw--faded': foundCharacter.odlaw,
    })
    const wizardClass = classNames({
        'wizard--faded': foundCharacter.wizard,
    })

    return (
        <div className="characterImages">
            <img
                class={waldoClass}
                src={waldoCharacterImage}
                alt="the character Waldo's face"
            />
            <img
                class={odlawClass}
                src={odlawCharacterImage}
                alt="the character Odlaw's face"
            />
            <img
                class={wizardClass}
                src={wizardCharacterImage}
                alt="the character Wizard's face"
            />
        </div>
    )
}

export default CharacterImages
