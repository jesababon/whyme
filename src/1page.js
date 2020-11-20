import React from 'react'
import {Link} from 'react-router-dom';
import Button from '@cmsgov/design-system/dist/components/Button/Button'


function First(){
return(
   <div>
        <p className="ds-display">
          <Button component={Link} to="/Second" type="button" className="ds-c-button ds-c-button--primary ds-c-button--hover ds-c-button--big">
            Reveal Page 2
          </Button>

        </p>

   </div>
)
}

export default First;