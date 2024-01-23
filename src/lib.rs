use wasm_bindgen::prelude::*;
#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn generate_sequence(length: i32) {
    let mut arr = Vec::new();
    let mut i = 0;

    while i < length {
        arr.push(i);
        i += 1;
    }
}
