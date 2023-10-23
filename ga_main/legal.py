# import libraries
import os
from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain.agents import load_tools
from langchain.agents import initialize_agent

# كود حسام 
from langchain.agents import create_csv_agent
from langchain.chat_models import ChatOpenAI
from langchain.agents.agent_types import AgentType
from langchain.memory import ConversationBufferMemory
csv_memory = ConversationBufferMemory()

# from bidi.algorithm import get_display
# from arabic_reshaper import reshape

os.environ["OPENAI_API_KEY"] = "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"
agent = create_csv_agent(OpenAI(temperature=0), 'legal1.csv', verbose=True)

def Legal_Researcher(input_variable):
    
  # input_variable_1 = input_variable+" . "+language
  # input_variable_1= agent.run(input_variable)
  Output_For_Function= input_variable_1 + input_variable

  return Output_For_Function










  # # create a new openai api key
  # os.environ["OPENAI_API_KEY"] = "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"
  # # set up openai api key
  # openai_api_key = os.environ.get('OPENAI_API_KEY')
  # print(input_variable)
  # # Load in some tools to use
  # os.environ["SERPAPI_API_KEY"] = "ceb927199c0580a405389c70b55cab228822926a51ff1c8e7de0496cbed2f98e"

  # # set up openai api key
  # SERPAPI_API_KEY = os.environ.get('SERPAPI_API_KEY')
 
  # # create a model
  # llm = OpenAI(temperature = 0.9)

  # tools = load_tools(["serpapi", "llm-math"], llm=llm)

  # agent = initialize_agent(tools, llm, agent="zero-shot-react-description", verbose=True)
  # Output_For_Function =agent.run(input_variable_1) 
 
