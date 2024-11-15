


import  { useState } from 'react';
import axios from 'axios';

const AddInterviewExperience = () => {
  const [questions, setQuestions] = useState(['']);
  const [dataStructures, setDataStructures] = useState([]);
  const [selectedDataStructure, setSelectedDataStructure] = useState('');
  const [topics, setTopics] = useState([]);
  const [newTopic, setNewTopic] = useState({ topic: '', frequency: 1 });

  // Function to add a new question field
  const addQuestion = () => {
    setQuestions([...questions, '']);
  };

  // Function to remove a specific question field
  const removeQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  // Function to add a data structure to the list
  const addDataStructure = () => {
    if (selectedDataStructure && !dataStructures.includes(selectedDataStructure)) {
      setDataStructures([...dataStructures, selectedDataStructure]);
      setSelectedDataStructure('');
    }
  };

  // Function to remove a specific data structure from the list
  const removeDataStructure = (ds) => {
    setDataStructures(dataStructures.filter((item) => item !== ds));
  };

  // Function to add a new topic
  const addTopic = () => {
    if (newTopic.topic) {
      setTopics([...topics, { ...newTopic }]);
      setNewTopic({ topic: '', frequency: 1 });
    }
  };

  // Function to remove a specific topic
  const removeTopic = (topicName) => {
    setTopics(topics.filter((topic) => topic.topic !== topicName));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const experienceData = {
      name: e.target.name.value,
      company: e.target.company.value,
      interviewer: e.target.interviewer.value,
      date: e.target.date.value,
      questions,
      dsa: dataStructures,
      topics,
      comments: e.target.comments.value,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/interview-experience', experienceData);
      alert(response.data.message);

      // Reset form fields after successful submission
      e.target.reset();
      setQuestions(['']);
      setDataStructures([]);
      setTopics([]);
    } catch (error) {
      console.error('Error saving experience:', error);
      alert('Failed to save experience.');
    }
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-700 text-center my-4">
        Add Interview Experience
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Student Name */}
        <div>
          <label className="font-bold flex items-center text-gray-700 mb-1">
            <i className="fas fa-user mr-2"></i> Student Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full p-2 border rounded focus:border-blue-400"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="font-bold flex items-center text-gray-700 mb-1">
            <i className="fas fa-building mr-2"></i> Company Name
          </label>
          <input
            type="text"
            name="company"
            placeholder="Enter the company's name"
            className="w-full p-2 border rounded focus:border-blue-400"
          />
        </div>

        {/* Interviewer Name */}
        <div>
          <label className="font-bold flex items-center text-gray-700 mb-1">
            <i className="fas fa-user-tie mr-2"></i> Interviewer Name
          </label>
          <input
            type="text"
            name="interviewer"
            placeholder="Enter the interviewer's name"
            className="w-full p-2 border rounded focus:border-blue-400"
          />
        </div>

        {/* Interview Date */}
        <div>
          <label className="font-bold flex items-center text-gray-700 mb-1">
            <i className="fas fa-calendar-alt mr-2"></i> Interview Date
          </label>
          <input
            type="date"
            name="date"
            className="w-full p-2 border rounded focus:border-blue-400"
          />
        </div>

        {/* Interview Questions */}
        <div>
          <label className="font-bold text-gray-700 mb-1">Interview Questions</label>
          {questions.map((question, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                placeholder="Enter a question"
                value={question}
                onChange={(e) => {
                  const newQuestions = [...questions];
                  newQuestions[index] = e.target.value;
                  setQuestions(newQuestions);
                }}
                className="w-full p-2 border rounded focus:border-blue-400 mr-2"
              />
              <button
                type="button"
                onClick={() => removeQuestion(index)}
                className="text-red-500"
              >
                &times;
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addQuestion}
            className="w-full bg-gray-200 p-2 rounded mt-2 hover:bg-gray-300"
          >
            + Add Question
          </button>
        </div>

        {/* Data Structures */}
        <div>
          <label className="font-bold text-gray-700 mb-1">Data Structures</label>
          <select
            value={selectedDataStructure}
            onChange={(e) => setSelectedDataStructure(e.target.value)}
            className="w-full p-2 border rounded focus:border-blue-400 mb-2"
          >
            <option value="">Select a Data Structure</option>
            <option value="Array">Array</option>
            <option value="String">String</option>
            <option value="Linked List">Linked List</option>
            <option value="Stack">Stack</option>
            <option value="Queue">Queue</option>
            <option value="Hash Table">Hash Table</option>
            <option value="Tree">Tree</option>
            <option value="Graph">Graph</option>
          </select>
          {dataStructures.map((ds, index) => (
            <div key={index} className="flex items-center justify-between bg-green-50 border border-green-300 p-2 rounded mb-2">
              <span>{ds}</span>
              <button onClick={() => removeDataStructure(ds)} className="text-red-500">
                &times;
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addDataStructure}
            className="w-full bg-gray-200 p-2 rounded mt-2 hover:bg-gray-300"
          >
            + Add Data Structure
          </button>
        </div>

        {/* Topics and Frequency */}
        <div>
          <label className="font-bold text-gray-700 mb-1">Topics and Frequency</label>
          <div className="flex items-center mb-2">
            <input
              type="text"
              placeholder="Enter a topic"
              value={newTopic.topic}
              onChange={(e) => setNewTopic({ ...newTopic, topic: e.target.value })}
              className="w-1/2 p-2 border rounded focus:border-blue-400 mr-2"
            />
            <input
              type="number"
              min="1"
              value={newTopic.frequency}
              onChange={(e) => setNewTopic({ ...newTopic, frequency: parseInt(e.target.value) })}
              className="w-1/4 p-2 border rounded focus:border-blue-400 mr-2"
              placeholder="Frequency"
            />
            <button type="button" onClick={addTopic} className="bg-blue-400 text-white px-4 py-2 rounded">
              Add
            </button>
          </div>
          {topics.map((topic, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-50 border p-2 rounded mb-2">
              <span>{topic.topic} - {topic.frequency}</span>
              <button onClick={() => removeTopic(topic.topic)} className="text-red-500">
                &times;
              </button>
            </div>
          ))}
        </div>

        {/* Additional Comments */}
        <div>
          <label className="font-bold flex items-center text-gray-700 mb-1">
            <i className="fas fa-comments mr-2"></i> Additional Comments
          </label>
          <input
            type="text"
            name="comments"
            placeholder="Any comments or tips?"
            className="w-full p-2 border rounded focus:border-blue-400"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Submit Experience
        </button>
      </form>
    </div>
  );
};

export default AddInterviewExperience;
