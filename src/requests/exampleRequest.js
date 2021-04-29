import { Delete, Get, Post, Put } from './api';

export const count = async (params) => {
  if (params) {
    return await Get(`${process.env.REACT_APP_API_URL}/cities/count?${params}`);
  }
  return await Get(`${process.env.REACT_APP_API_URL}/cities/count`);
};

export const list = async (params) => {
  if (params) {
    return await Get(`${process.env.REACT_APP_API_URL}/cities?${params}`);
  }
  return await Get(`${process.env.REACT_APP_API_URL}/cities`);
};

export const get = async (id) => {
  return await Get(`${process.env.REACT_APP_API_URL}/cities/${id}`);
};

export const add = async (data) => {
  return await Post(`${process.env.REACT_APP_API_URL}/cities`, data);
};

export const update = async (id, data) => {
  return await Put(`${process.env.REACT_APP_API_URL}/cities/${id}`, data);
};

export const remove = async (id) => {
  return await Delete(`${process.env.REACT_APP_API_URL}/cities/${id}`);
};
