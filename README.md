
# MAIN.PY
### "  1  "  
Pra criar o backend corretamente use o comando
```
fastapi dev .\main.py 
```

![[Pasted image 20241121182638.png]]
Deve aparecer assim ^


precisa ter os 
@app.post("/...") e @app.get("/...")
de acordo com o que tem em parameters.py e (se não tiver) criar o mesmo no file_manager.py

fica assim no main.py:

```
class SlotSizeModel(BaseModel):  
    slot_size: float
```

```
@app.post("/set_slot_size")  
def set_slot_size(slot_size_data: SlotSizeModel):  
    try:        success = file_manager.set_slot_size(slot_size_data.slot_size)  
        if success:  
            return {"message": "Slot size updated successfully", "new_value": slot_size_data.slot_size}  
        else:  
            raise HTTPException(status_code=500, detail="Failed to update slot size")  
    except Exception as e:  
        raise HTTPException(status_code=500, detail=str(e))  
  
@app.get("/get_slot_size")  
def get_slot_size():  
    try:        params = file_manager.get_params()  
        return {"slot_size": params["slot_size"]}  
    except Exception as e:  
        raise HTTPException(status_code=500, detail=str(e))  
  
```

parameters.py:

```
def set_slot_size(self, slot_size: float):  
    # Set the slot size and save the parameters  
    self.params["slot_size"] = slot_size  
    self.params.save_params()  
  
def get_slot_size(self):  
    # Make sure the slot size is not a string and return it  
    assert not isinstance(self.params["slot_size"], str)  
    return self.params["slot_size"]

```

file_manager.py:

```
def set_slot_size(self, slot_size):  
    try:        params = self.get_params()  
        params["slot_size"] = slot_size  
        return self.save_params(params)  
    except Exception as e:  
        print(f"Error setting slot size: {e}")  
        return False

```

quaisquer outros que for adicionar(de parametros de parameters.json) tem que seguir esse padrão de adicionar.



Adendo:

```
@app.get("/get_slot_size")  
def get_slot_size():  
    try:        params = file_manager.get_params()  
        return {"slot_size": params["slot_size"]}  
    except Exception as e:  
        raise HTTPException(status_code=500, detail=str(e))  
```
porque todos os gets tem params = file_manager.get_params()?
porque planejo que get_params() retorne o valor default que é o que o Talles mandou pra a gente anteriormente.
(Caso o usuário queira voltar pros valores default pra alterar depois)

