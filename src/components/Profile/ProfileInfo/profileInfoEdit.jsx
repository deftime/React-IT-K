import React from 'react';
import cls from '../../../css/profile.module.css';
import {reduxForm, Field} from 'redux-form';
import {input, textarea} from '../../common/fieldComponents';

function ProfileEdit(props) {

  // let [data, setData] = useState({name: props.name, about: props.about, job: props.job, jobDesc: props.jobDesc, contacts: props.contacts});

  // useEffect(()=>{
  //   setData({...data, name: props.name})
  // }, [props.name])

  function buildSocialFields() {
    return Object.keys(props.contacts).map(key => <><Field key={key} component={input} type="text" name={`contacts.${key}`} /><br /></>)
  }

  return (
    <div className={cls.editModeForm}>
      <form onSubmit={props.handleSubmit}>
        <label>Name:
        <Field component={input} type="text" name="fullName" id={cls.inpName} /></label><br />
        <label>About me:<br />
        <Field component={textarea} name="aboutMe" value="text" /></label><br />
        <label>Looking for job?
        <Field component={input} type="checkbox" name="lookingForAJob" /></label><br />
        <label>Description of job:<br />
        <Field component={textarea} name="lookingForAJobDescription" /></label><br />
        <span>Contacts:</span><br />
        <div className={cls.contactWrapper}>
          <div className={cls.contactLabels}>
            <label htmlFor="facebook">Facebook:</label><br />
            <label htmlFor="website">Web:</label><br />
            <label htmlFor="vk">VK:</label><br />
            <label htmlFor="twitter">Twitter:</label><br />
            <label htmlFor="instagram">Instagram:</label><br />
            <label htmlFor="youtube">You Tube:</label><br />
            <label htmlFor="github">GitHub:</label><br />
            <label htmlFor="mainLink">Main Link:</label><br />
          </div>
          <div className={cls.contactFields}>
            {buildSocialFields()}
          </div>
        </div>
        <button>SAVE</button>
      </form>
    </div>
  )
}

export default reduxForm({form: 'editProfile'})(ProfileEdit);
