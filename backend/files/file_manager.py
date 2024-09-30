import os
from glob import glob
import json


def structure(directory, extension):
    paths = glob(os.path.join(directory, "*" + extension))
    elements = [os.path.splitext(os.path.basename(path))[0] for path in paths]
    return dict(zip(elements, paths))



def get_files(directory, extension="*.txt"):
    return glob(os.path.join(directory, extension))


class FileManager(object):
    def __init__(self):
        # Obtém o diretório atual onde este arquivo está localizado
        current_dir = os.path.dirname(os.path.abspath(__file__))

        # Navega para o diretório pai ('data' está em 'backend\data')
        parent_dir = os.path.dirname(current_dir)

        # Define os caminhos baseados no diretório pai
        self.data_dir = os.path.join(parent_dir, "data")
        self.topologies_dir = os.path.join(self.data_dir, "topologies")
        self.osnr_dir = os.path.join(self.data_dir, "osnr")
        self.crosstalk_dir = os.path.join(self.data_dir, "crosstalk")
        self.parameters_path = os.path.join(self.data_dir, "parameters.json")
        self.confidence_interval_path = os.path.join(self.data_dir, "confidence_interval.csv")
        self.traffic_input_file_path = os.path.join(self.data_dir, "traffic_input_file.csv")

        # Verificação
        print(f"Data Directory: {self.data_dir}")
        print(f"Parameters Path: {self.parameters_path}")

        # Estrutura dos arquivos
        self.dict_topologies = structure(self.topologies_dir, ".txt")
        self.dict_osnr = structure(self.osnr_dir, ".txt")
        self.dict_crosstalk = structure(self.crosstalk_dir, ".txt")

    def get_params(self):
        # Verifica se o arquivo de parâmetros existe antes de tentar abrir
        if not os.path.exists(self.parameters_path):
            raise FileNotFoundError(f"O arquivo {self.parameters_path} não foi encontrado.")

        # Lê os parâmetros do arquivo JSON
        with open(self.parameters_path, "r") as f:
            properties_param = json.load(f)
        return properties_param
