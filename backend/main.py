from fastapi import FastAPI

from files.parameters import Params
from files.file_manager import FileManager

file_manager = FileManager()
params = Params()
app = FastAPI()


@app.get("/mcf-config")
def get_mcf():
    params = Params()
    return {"mcf_config": params.get_mcf_config()}

@app.get("/file-topology")
def get_file_topology():
    params = Params()
    return {"file_topology": params.get_file_topology()}


