use axum::{http::StatusCode, response::IntoResponse, Json};
use serde::{Deserialize, Serialize};

pub async fn process_data(Json(request): Json<DataRequest>) -> impl IntoResponse {
    let mut string_len: usize = 0;
    let mut int_sum: i64 = 0;

    // Iterate over the array of values in the request
    for value in &request.data {
        match value {
            DataValue::StringValue(s) => string_len += s.len(),
            DataValue::IntValue(n) => {
                // Add the integer value if it's a number
                int_sum += *n;
            }
        }
    }

    // Create a response containing the computed values
    let response = DataResponse {
        string_len,
        int_sum,
    };

    // Return the response as JSON with status code OK
    (StatusCode::OK, Json(response))
}

#[derive(Deserialize)]
pub struct DataRequest {
    data: Vec<DataValue>, // Define a field to hold the array of values
}

#[derive(Debug, Deserialize, Serialize)]
#[serde(untagged)]
enum DataValue {
    StringValue(String),
    IntValue(i64),
}

#[derive(Serialize)]
pub struct DataResponse {
    // Add any fields here
    string_len: usize,
    int_sum: i64,
}
