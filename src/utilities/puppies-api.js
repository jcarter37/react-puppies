const BASE_URL = '/api/puppies';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

export function create(pup) {
    return fetch(BASE_URL, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(pup)
    }).then(res => res.json());
  }

  export function update(updatedPuppyData) {
    return fetch(`${BASE_URL}/${updatedPuppyData._id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(updatedPuppyData),
    }).then(res => res.json());
  }
  
  export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    }).then(res => res.json());
  }