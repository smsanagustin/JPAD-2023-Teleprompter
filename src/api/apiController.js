import mongoose from 'mongoose';




// ******************************* [ SCHEMA fields ] *******************************

const ScriptSchema = mongoose.Schema({
  trackingID: {type: String, required: true},
  title: { type: String, required: true},
  text: { type: String, required: true},
  settings: {
    scrollSpeed: Number,
    fontStyle: Number, /* Key reference to an element in the Font style map */
    fontSize: Number,
    fontColor: String,
    backgroundColor: String,
  }
})



// ******************************* [ START OF SCHEMA MODELS TYPES ] *******************************

const Script = mongoose.model('Script', ScriptSchema, 'scripts');


// ****************************************************************************************




// ******************************* [ OTHER METHODS ] *******************************

const generateRandomString = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}


// ****************************************************************************************




// ******************************* [ START OF QUERIES ] *******************************

const getScripts = async (req, res) => {
  try{
    const scripts = await Script.find({});
    res.send({ success: true, data: scripts});
  } catch(error){
    res.status(500).send({ success: false, error: 'Failed to retrieve scripts.'});
  }
}

const saveNewScript = async(req, res) => {
  const newScript = new Script({
    trackingID: generateRandomString(16),
    title: req.body.title,
    text: req.body.text,
  });

  const result = await newScript.save();

  if (result._id) {
    res.send({ success: true });
  } else {
    res.send({ success: false, error: 'Failed to save script' });
  }
}

const updateScript = async (req, res) => {
  try {
    const updatedScript = await Script.findOneAndUpdate(
      { trackingID: req.body.trackingID },
      {
        title: req.body.title,
        text: req.body.text,
      },
      { new: true }
    );

    if (updatedScript) {
      res.send({ success: true, Script: updatedScript });
    } else {
      res.send({ success: false, error: 'Script not found.' });
    }
  } catch (error) {
    res.status(500).send({ success: false, error: 'Failed to update script.' });
  }
};

const deleteScript = async (req, res) => {
  try {
    const deleteScript = await Script.findOneAndDelete({ trackingID: req.body.trackingID });

    if(deleteScript){
      res.send({ success: true });
    } else {
      res.send({ success: false, error: 'Script not found.'});
    }
  } catch (error) {
    res.status(500).send( {success: false, error: 'Failed to delete script.' });
  }
};



export {
  getScripts,
  saveNewScript,
  updateScript,
  deleteScript,
};
